import type { Exhibit } from "../types";

type Props = {
  exhibits: Exhibit[];
  highlightCode?: string;
};

/**
 * B전시실 배치도 (목업).
 * TODO[asset]: 실제 전시관 배치도 이미지로 교체. 현재는 SVG로 그리드+핀 위치만 모사.
 * 핀 위치는 캡쳐된 배치도에서 대략적으로 추정한 좌표.
 */
const PIN_POSITIONS: Record<string, { x: number; y: number }> = {
  B26: { x: 38, y: 70 },
  B41: { x: 18, y: 22 },
  B42: { x: 22, y: 22 },
  B47: { x: 38, y: 25 },
  B12: { x: 60, y: 27 },
};

export function HallMap({ exhibits, highlightCode }: Props) {
  return (
    <div className="relative w-full aspect-[16/8] rounded-xl overflow-hidden bg-slate-400 border-2 border-slate-500">
      {/* 격자 룸 목업 */}
      <svg
        viewBox="0 0 100 50"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <rect x="0" y="0" width="100" height="50" fill="#7B8AA3" />
        {/* 룸 디바이더들 */}
        <g stroke="#5C6A82" strokeWidth="0.4" fill="#9AA8BD">
          <rect x="3" y="3" width="22" height="20" />
          <rect x="3" y="25" width="22" height="22" />
          <rect x="27" y="3" width="40" height="20" />
          <rect x="27" y="25" width="40" height="22" />
          <rect x="69" y="3" width="28" height="44" />
        </g>
        {/* 작은 텍스트 (숫자) - 디테일 표현 */}
        <g fill="#3A4658" fontSize="2" fontFamily="sans-serif">
          <text x="6" y="14">3D 스페이스</text>
          <text x="34" y="14">허블의 천문대</text>
          <text x="55" y="14">사이엑스</text>
          <text x="80" y="14">1-7</text>
        </g>
      </svg>

      {/* 핀들 */}
      {exhibits.map((ex) => {
        const pos = PIN_POSITIONS[ex.code];
        if (!pos) return null;
        const isHighlight = highlightCode === ex.code;
        return (
          <div
            key={ex.id}
            className="absolute -translate-x-1/2 -translate-y-full"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
          >
            <div
              className={`relative ${isHighlight ? "animate-bounce-soft" : ""}`}
              aria-label={ex.code}
            >
              <svg width="20" height="26" viewBox="0 0 20 26">
                <path
                  d="M10 0 C4 0 0 4 0 10 C0 17 10 26 10 26 C10 26 20 17 20 10 C20 4 16 0 10 0 Z"
                  fill={isHighlight ? "#F75A99" : "#F75A99"}
                  stroke={isHighlight ? "#D63E80" : "transparent"}
                  strokeWidth="1.5"
                />
                <circle cx="10" cy="9" r="3.2" fill="white" />
              </svg>
              {isHighlight && (
                <span className="absolute -inset-2 rounded-full border-2 border-pinkBtn animate-pulse" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
