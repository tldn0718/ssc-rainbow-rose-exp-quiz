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
            color: "#fff",
            WebkitTextStroke: "2px #1f2937",
            textShadow:
              "3px 3px 0 #ff6b8a, -1px -1px 0 #ff6b8a, 1px -1px 0 #ff6b8a, -1px 1px 0 #ff6b8a",
            transform: "rotate(-2deg)",
          }}
        >
          {meta.clearTitle}
        </h2>

        <div className="mt-4 w-full bg-white/95 rounded-3xl px-5 py-5 shadow-soft animate-pop-in min-h-0 overflow-y-auto">
          <p className="text-slate-800 leading-relaxed whitespace-pre-line text-center text-[14px]">
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
