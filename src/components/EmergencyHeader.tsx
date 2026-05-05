import type { QuizMeta } from "../types";

type Props = {
  meta: QuizMeta;
};

export function EmergencyHeader({ meta }: Props) {
  return (
    <div
      className="w-full rounded-3xl px-6 py-4 text-center"
      style={{
        background: "#62B5DB",
        boxShadow: "0 4px 0 rgba(30,120,168,0.4)",
      }}
    >
      <h2
        className="font-display text-2xl text-white whitespace-pre-line leading-snug"
        style={{
          fontFamily: "'Black Han Sans','Jua',sans-serif",
          letterSpacing: "0.02em",
        }}
      >
        {meta.emergencyTitle}
      </h2>
    </div>
  );
}
