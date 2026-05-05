import type { QuizMeta } from "../types";
import { RainbowHeader } from "./RainbowHeader";
import { Sparkles } from "./Sparkles";

type Props = {
  meta: QuizMeta;
};

export function ClearScreen({ meta }: Props) {
  return (
    <div
      className="relative h-[100dvh] flex flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #5DC3EE 0%, #87D4F0 25%, #C0E5F4 50%, #BCE3DC 100%)",
      }}
    >
      <RainbowHeader height="220px" />
      <Sparkles />

      <div className="relative px-5 pt-8 pb-6 flex-1 flex flex-col items-center min-h-0">
        <h2
          className="font-display text-5xl text-center"
          style={{
            fontFamily: "'Black Han Sans','Jua',sans-serif",
            color: "#fff5d0",
            WebkitTextStroke: "2px #ef4444",
            paintOrder: "stroke fill",
            textShadow: "0 4px 0 #ef4444, 0 7px 0 #1f2937",
            transform: "rotate(-2deg)",
          }}
        >
          {meta.clearTitle}
        </h2>

        <div
          className="mt-4 w-full rounded-3xl px-5 py-6 shadow-soft animate-pop-in min-h-0 overflow-y-auto"
          style={{ background: "#62B5DB" }}
        >
          <p className="text-white leading-relaxed whitespace-pre-line text-center text-[14px]">
            {meta.clearBody}
          </p>
        </div>

        <div className="flex-1 min-h-0" />

        <div className="mt-4 w-full bg-deepSky text-white rounded-md px-4 py-3 text-center">
          <p className="leading-relaxed whitespace-pre-line text-sm">
            {meta.clearFooter}
          </p>
        </div>
      </div>
    </div>
  );
}
