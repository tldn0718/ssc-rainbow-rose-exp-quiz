import type { QuizMeta } from "../types";
import { PinkButton } from "./PinkButton";
import { RainbowHeader } from "./RainbowHeader";
import { Sparkles } from "./Sparkles";

type Props = {
  meta: QuizMeta;
  onStart: () => void;
};

export function StartScreen({ meta, onStart }: Props) {
  return (
    <div
      className="relative h-[100dvh] flex flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #5DC3EE 0%, #87D4F0 30%, #C0E5F4 50%, #B5E0B0 75%, #D9E58D 100%)",
      }}
    >
      <RainbowHeader height="65%" />
      <Sparkles />

      <div className="relative flex-1 flex flex-col items-center px-6 pt-16">
        <div className="relative animate-pop-in">
          {/* TODO[asset]: 메인 타이틀 일러스트("무지개 장미 탐험대" 손글씨/장미) — 현재 텍스트+이모지 목업 */}
          <h1
            className="title-rainbow font-display text-[64px] sm:text-7xl text-center leading-[0.95] tracking-tight"
            style={{ fontFamily: "'Black Han Sans','Jua',sans-serif" }}
          >
            <span className="block">무지개</span>
            <span className="block">장미</span>
            <span className="block">탐험대</span>
          </h1>
          <span className="absolute -left-8 top-16 text-4xl rotate-[-15deg]" aria-hidden>
            🌹
          </span>
          <span className="absolute -right-2 top-6 text-4xl rotate-[12deg]" aria-hidden>
            🌹
          </span>
        </div>
      </div>

      <div className="wave-divider mt-2" />
      <div className="bg-sky-2 pb-1" />

      <div className="relative flex flex-col items-center px-6 pt-8 pb-12 text-center">
        <p
          className="font-bold text-slate-800 leading-relaxed whitespace-pre-line text-lg"
          style={{
            backgroundImage:
              "linear-gradient(transparent 60%, rgba(180, 235, 100, 0.6) 60%)",
            backgroundRepeat: "no-repeat",
            paddingInline: "0.5rem",
          }}
        >
          {meta.subtitle}
        </p>

        <div className="mt-8">
          <PinkButton onClick={onStart} size="lg">
            {meta.startButton}
          </PinkButton>
        </div>
      </div>
    </div>
  );
}
