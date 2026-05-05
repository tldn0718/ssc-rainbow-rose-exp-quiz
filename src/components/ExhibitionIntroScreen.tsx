import type { QuizMeta } from "../types";
import { RainbowHeader } from "./RainbowHeader";
import { Sparkles } from "./Sparkles";
import { PinkButton } from "./PinkButton";

type Props = {
  meta: QuizMeta;
  onNext: () => void;
};

export function ExhibitionIntroScreen({ meta, onNext }: Props) {
  return (
    <div className="relative h-[100dvh] flex flex-col overflow-hidden">
      <div className="relative" style={{ height: "260px" }}>
        <RainbowHeader height="260px" />
        <Sparkles />
        <div className="relative h-full flex items-center justify-center px-6">
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
      </div>

      <div className="flex-1 bg-deepSky text-white px-6 py-12">
        <p className="text-center leading-loose whitespace-pre-line text-[15px]">
          {meta.exhibitionIntroBody}
        </p>
      </div>

      <div className="bg-sky-4 py-8 flex justify-center">
        <PinkButton onClick={onNext}>{meta.next}</PinkButton>
      </div>
    </div>
  );
}
