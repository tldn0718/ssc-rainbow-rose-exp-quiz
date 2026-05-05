import type { Exhibit } from "../types";

type Props = {
  exhibits: Exhibit[];
  highlightCode?: string;
  /** 이전 전시물 코드. 지정 시 그 핀에서 highlightCode 핀으로 곡선 경로를 그림. */
  routeFromCode?: string;
  /** 첫 이동일 때 입구(우측 'Boom! 씽긋!' 표식)에서 곡선 경로를 그림. */
  routeFromEntrance?: boolean;
};

/**
 * hall-map.webp(1037x377) 위 각 번호 영역의 중앙 % 좌표.
 * 디자인 introduce_exhibition.png의 빨간 원 위치 기준.
 */
export const PIN_POSITIONS: Record<string, { x: number; y: number }> = {
  B41: { x: 14, y: 17 },
  B42: { x: 19, y: 17 },
  B47: { x: 38, y: 17 },
  B12: { x: 62, y: 23 },
  B26: { x: 46, y: 88 },
};

const ENTRANCE_POS = { x: 95, y: 22 };

export function HallMap({
  exhibits,
  highlightCode,
  routeFromCode,
  routeFromEntrance,
}: Props) {
  const targetPos = highlightCode ? PIN_POSITIONS[highlightCode] : undefined;
  const fromPos = routeFromCode
    ? PIN_POSITIONS[routeFromCode]
    : routeFromEntrance
      ? ENTRANCE_POS
      : undefined;

  const showRoute = !!(targetPos && fromPos);

  return (
    <div
      className="relative w-full"
      style={{ aspectRatio: "1037 / 377" }}
      data-hall-map
    >
      <img
        src="/assets/hall-map.webp"
        alt="B전시실 배치도"
        className="absolute inset-0 w-full h-full object-contain rounded-xl"
      />

      {showRoute && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <RoutePath from={fromPos} to={targetPos} />
        </svg>
      )}

      {exhibits.map((ex) => {
        const pos = PIN_POSITIONS[ex.code];
        if (!pos) return null;
        const isHighlight = highlightCode === ex.code;
        return (
          <div
            key={ex.id}
            data-pin-code={ex.code}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            aria-label={ex.code}
          >
            <div
              className={
                isHighlight ? "relative animate-bounce-soft" : "relative"
              }
              style={{ width: 16, height: 16 }}
              data-pin-circle
            >
              {/* 빨간 ring — 좌표 가운데에 위치하여 지도 번호를 둘러쌈 */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "2.5px solid #e60019",
                  background: "transparent",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.25)",
                }}
              />
              {/* 노란 핀 — 강조된 핀은 살짝 더 큼 */}
              <img
                src="/assets/pin-yellow.png"
                alt=""
                aria-hidden
                className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                style={{
                  width: isHighlight ? 18 : 15,
                  height: "auto",
                  bottom: "calc(100% - 4px)",
                  filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.25))",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function RoutePath({
  from,
  to,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
}) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.hypot(dx, dy);
  // 곡률: 거리에 비례한 컨트롤 오프셋 (살짝 아래로 휘게)
  const bend = Math.min(dist * 0.35, 22);
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2 + bend;

  const d = `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;

  return (
    <path
      d={d}
      fill="none"
      stroke="#F39320"
      strokeWidth="2.2"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
    />
  );
}
