import type { Exhibit } from "../types";

type Props = {
  exhibits: Exhibit[];
};

/**
 * hall-map.webp(1037x377) 위 각 번호 영역의 중앙 % 좌표.
 */
export const PIN_POSITIONS: Record<string, { x: number; y: number }> = {
  B41: { x: 14, y: 17 },
  B42: { x: 19, y: 17 },
  B47: { x: 38, y: 17 },
  B12: { x: 62, y: 23 },
  B26: { x: 46, y: 88 },
};

export function HallMap({ exhibits }: Props) {
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
        return (
          <div
            key={ex.id}
            data-pin-code={ex.code}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            aria-label={ex.code}
          >
            <div className="relative" style={{ width: 16, height: 16 }}>
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "2.5px solid #e60019",
                  background: "transparent",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.25)",
                }}
              />
              <img
                src="/assets/pin-yellow.webp"
                alt=""
                aria-hidden
                className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                style={{
                  width: 15,
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
