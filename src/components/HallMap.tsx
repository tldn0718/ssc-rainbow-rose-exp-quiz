import type { Exhibit } from "../types";

type Props = {
  exhibits: Exhibit[];
  highlightCode?: string;
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

export function HallMap({ exhibits, highlightCode }: Props) {
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
      {exhibits.map((ex) => {
        const pos = PIN_POSITIONS[ex.code];
        if (!pos) return null;
        const isHighlight = highlightCode === ex.code;
        return (
          <div
            key={ex.id}
            data-pin-code={ex.code}
            className="absolute -translate-x-1/2 -translate-y-1/2"
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
              {/* 핑크 핀 — 빨간 ring 위쪽에 솟아 있음 */}
              <img
                src="/assets/pin.webp"
                alt=""
                aria-hidden
                className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                style={{
                  width: 12,
                  height: "auto",
                  bottom: "calc(100% - 3px)",
                }}
              />
              {isHighlight && (
                <span className="absolute -inset-2 rounded-full border-2 border-red-500 animate-pulse" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
