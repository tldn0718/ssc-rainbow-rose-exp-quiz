import type { QuizMeta } from "../types";

type Props = {
  meta: QuizMeta;
};

export function EmergencyHeader({ meta }: Props) {
  return (
    <div className="flex items-center gap-3">
      {/* TODO[asset]: 실제 긴급 사이렌 아이콘 — 현재 이모지 목업 */}
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-yellow-200 to-yellow-300 border-2 border-slate-800 flex items-center justify-center text-3xl shadow">
        🚨
      </div>
      <h2
        className="font-display text-4xl"
        style={{
          fontFamily: "'Black Han Sans','Jua',sans-serif",
          color: "#1f2937",
          WebkitTextStroke: "2px #1f2937",
          textShadow:
            "3px 3px 0 #ff6b8a, -1px -1px 0 #ff6b8a, 1px -1px 0 #ff6b8a, -1px 1px 0 #ff6b8a",
          letterSpacing: "-0.02em",
        }}
      >
        {meta.emergencyTitle}
      </h2>
    </div>
  );
}
