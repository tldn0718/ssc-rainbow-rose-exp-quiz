import type { Exhibit, QuizMeta } from "../types";
import { fillTemplate } from "../i18n";
import { RainbowHeader } from "./RainbowHeader";
import { Sparkles } from "./Sparkles";
import { PinkButton } from "./PinkButton";
import { HallMap } from "./HallMap";

type Props = {
  meta: QuizMeta;
  exhibit: Exhibit;
  exhibits: Exhibit[];
  isFirst: boolean;
  onNext: () => void;
};

export function MoveToScreen({
  meta,
  exhibit,
  exhibits,
  isFirst,
  onNext,
}: Props) {
  const title = isFirst ? meta.moveToFirstTitle : meta.moveToNextTitle;
  const bodyTemplate = isFirst ? meta.moveToFirstBody : meta.moveToNextBody;
  const body = fillTemplate(bodyTemplate, {
    code: exhibit.code,
    title: exhibit.title,
  });

  return (
    <div
      className="relative min-h-[100dvh] flex flex-col overflow-x-hidden"
      style={{
        background:
          "linear-gradient(180deg, #5DC3EE 0%, #87D4F0 35%, #BFE5F4 70%, #DCEFEA 100%)",
      }}
    >
      <RainbowHeader height="200px" />
      <Sparkles />

      <div className="relative px-5 pt-12 pb-6 flex-1 flex flex-col">
        <h2
          className="font-display text-[28px] text-white text-center leading-tight whitespace-pre-line"
          style={{
            fontFamily: "'Black Han Sans','Jua',sans-serif",
            color: "#fff",
            WebkitTextStroke: "1px #1f2937",
            paintOrder: "stroke fill",
            textShadow: "0 3px 0 #1f2937",
          }}
        >
          {title}
        </h2>

        <div className="mt-5 bg-white/85 backdrop-blur rounded-2xl px-5 py-4 shadow-soft">
          <p className="text-slate-800 leading-relaxed whitespace-pre-line text-[15px] text-center">
            {body}
          </p>
        </div>

        <div className="mt-4">
          <HallMap exhibits={exhibits} highlightCode={exhibit.code} />
        </div>

        <div className="mt-4 flex justify-center">
          <div className="w-48 h-48 rounded-2xl overflow-hidden bg-slate-700 shadow-card">
            {exhibit.photo && (
              <img
                src={exhibit.photo}
                alt={exhibit.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>

        <div className="mt-5 text-center text-slate-800 text-sm leading-relaxed whitespace-pre-line">
          {meta.moveToFooter}
        </div>

        {isFirst && (
          <div className="mt-2 text-center text-slate-800 text-sm">
            {meta.moveToFirstExtra}
          </div>
        )}

        <div className="flex-1" />
        <div className="flex justify-center pt-6">
          <PinkButton onClick={onNext}>{meta.solveQuiz}</PinkButton>
        </div>
      </div>
    </div>
  );
}
