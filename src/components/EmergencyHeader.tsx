import type { QuizMeta } from "../types";

type Props = {
  meta: QuizMeta;
};

export function EmergencyHeader({ meta }: Props) {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/assets/siren.png"
        alt=""
        aria-hidden
        className="w-14 h-14 object-contain"
      />
      <h2
        className="font-display text-4xl"
        style={{
          fontFamily: "'Black Han Sans','Jua',sans-serif",
          color: "#ff6b8a",
          WebkitTextStroke: "1.5px #1f2937",
          paintOrder: "stroke fill",
          textShadow: "0 3px 0 #1f2937",
          letterSpacing: "-0.02em",
        }}
      >
        {meta.emergencyTitle}
      </h2>
    </div>
  );
}
