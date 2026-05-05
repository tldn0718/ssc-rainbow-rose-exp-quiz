type Props = {
  height?: string;
  tone?: "full" | "soft";
};

/**
 * 페이지 상단 무지개+하늘 배경.
 * TODO[asset]: 정식 무지개 헤더 일러스트로 교체. 현재는 CSS 그라디언트 목업.
 */
export function RainbowHeader({ height = "240px", tone = "full" }: Props) {
  return (
    <div
      className="absolute top-0 left-0 right-0 pointer-events-none"
      style={{ height }}
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-b from-sky-1 via-sky-2 to-sky-3" />
      <div
        className="absolute left-1/2 -translate-x-1/2 -bottom-10"
        style={{ width: "140%", height: "140%" }}
      >
        <div
          className="absolute inset-0 rounded-[50%]"
          style={{
            background:
              tone === "full"
                ? `radial-gradient(ellipse 60% 50% at 50% 100%,
                    transparent 0%, transparent 38%,
                    rgba(255,143,163,0.85) 39%,
                    rgba(255,179,107,0.85) 44%,
                    rgba(255,224,102,0.85) 49%,
                    rgba(181,228,140,0.85) 54%,
                    rgba(128,207,255,0.85) 59%,
                    rgba(194,155,255,0.7) 64%,
                    transparent 70%)`
                : `radial-gradient(ellipse 60% 50% at 50% 100%,
                    transparent 38%,
                    rgba(255,143,163,0.45) 41%,
                    rgba(255,224,102,0.45) 49%,
                    rgba(128,207,255,0.45) 58%,
                    transparent 68%)`,
            filter: "blur(2px)",
          }}
        />
      </div>
    </div>
  );
}
