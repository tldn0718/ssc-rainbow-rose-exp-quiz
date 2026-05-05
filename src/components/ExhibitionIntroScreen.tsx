import type { QuizMeta } from "../types";
import { Sparkles } from "./Sparkles";
import { PinkButton } from "./PinkButton";

type Props = {
  meta: QuizMeta;
  onNext: () => void;
};

export function ExhibitionIntroScreen({ meta, onNext }: Props) {
  return (
    <div
      className="relative h-[100dvh] flex flex-col overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/intro-bg.png)" }}
    >
      <Sparkles />

      <div className="relative flex flex-col items-center pt-12 px-6">
        <h2
          className="font-display text-5xl text-center"
          style={{
            fontFamily: "'Black Han Sans','Jua',sans-serif",
            color: "#fff",
            WebkitTextStroke: "1.5px #1f2937",
            paintOrder: "stroke fill",
            textShadow: "0 4px 0 #1f2937",
            transform: "rotate(-3deg)",
          }}
        >
          {meta.exhibitionIntroTitle}
        </h2>
      </div>

      <div className="relative flex-1 flex flex-col items-center justify-center px-3 mt-2">
        <div
          className="relative w-full rounded-3xl px-6 py-10 flex flex-col items-center"
          style={{ background: "rgba(255, 255, 255, 0.7)" }}
        >
          <p
            className="text-center leading-loose whitespace-pre-line font-bold text-slate-800"
            style={{ fontSize: "16px" }}
          >
            {meta.exhibitionIntroBody}
          </p>

          <div className="mt-8">
            <PinkButton onClick={onNext}>{meta.next}</PinkButton>
          </div>
        </div>
      </div>

      <div className="relative pb-6 px-6">
        <p className="text-center text-[13px] text-slate-700 font-semibold whitespace-pre-line">
          {meta.exhibitionIntroNotice}
        </p>
      </div>
    </div>
  );
}
