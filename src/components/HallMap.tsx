import type { Exhibit } from "../types";

type Props = {
  exhibits: Exhibit[];
  highlightCode?: string;
};

/**
 * 핀 위치는 PPTX 배치도(image73, 1037x377) 기준 상대 좌표.
 * 실제 핀 좌표는 슬라이드 5/6의 위치를 보고 추정한 값.
 */
const PIN_POSITIONS: Record<string, { x: number; y: number }> = {
  B26: { x: 38, y: 75 },
  B41: { x: 16, y: 18 },
  B42: { x: 19, y: 18 },
  B47: { x: 39, y: 18 },
  B12: { x: 60, y: 22 },
};

export function HallMap({ exhibits, highlightCode }: Props) {
  return (
    <div className="relative w-full" style={{ aspectRatio: "1037 / 377" }}>
      <img
        src="/assets/hall-map.png"
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
            className="absolute -translate-x-1/2 -translate-y-full"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            aria-label={ex.code}
          >
            <div className={isHighlight ? "animate-bounce-soft relative" : "relative"}>
              <img
                src="/assets/pin.png"
                alt=""
                aria-hidden
                className="w-5 h-auto drop-shadow"
              />
              {isHighlight && (
                <span className="absolute -inset-1.5 rounded-full border-2 border-pinkBtn animate-pulse" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
