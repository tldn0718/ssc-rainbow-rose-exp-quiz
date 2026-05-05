type SparklePosition = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size?: number;
  delay?: string;
};

type Props = {
  positions?: SparklePosition[];
};

const DEFAULT_POSITIONS: SparklePosition[] = [
  { top: "8%", left: "8%", size: 18 },
  { top: "14%", right: "12%", size: 22, delay: ".4s" },
  { top: "32%", left: "5%", size: 14, delay: ".8s" },
  { top: "26%", right: "8%", size: 16, delay: "1.2s" },
  { bottom: "30%", left: "10%", size: 12, delay: ".6s" },
  { bottom: "22%", right: "14%", size: 18, delay: "1s" },
];

export function Sparkles({ positions = DEFAULT_POSITIONS }: Props) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {positions.map((p, i) => (
        <div
          key={i}
          className="sparkle animate-twinkle"
          style={{
            top: p.top,
            left: p.left,
            right: p.right,
            bottom: p.bottom,
            width: p.size ?? 14,
            height: p.size ?? 14,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
