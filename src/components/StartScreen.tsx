import type { QuizMeta } from "../types";
import { PinkButton } from "./PinkButton";

type Props = {
  meta: QuizMeta;
  onStart: () => void;
};

export function StartScreen({ meta, onStart }: Props) {
  return (
    <div
      className="relative h-[100dvh] flex flex-col overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/bg-start.png)" }}
    >
      <div className="relative flex-1 flex flex-col items-center justify-start pt-[14vh] px-6">
        {/* 타이틀 + 장미: 이미지 무지개 안쪽에 배치 */}
        <div className="relative animate-pop-in">
          <h1
            className="title-rainbow font-display text-center leading-[0.95] tracking-tight relative z-10"
            style={{
              fontFamily: "'Black Han Sans','Jua',sans-serif",
              fontSize: "62px",
            }}
          >
            <span className="block">무지개</span>
            <span className="block">장미</span>
            <span className="block">탐험대</span>
          </h1>
          <img
            src="/assets/roses.png"
            alt=""
            aria-hidden
            className="absolute z-20 w-[100px] rotate-[-12deg]"
            style={{ left: "-72px", top: "92px" }}
          />
          <img
            src="/assets/roses.png"
            alt=""
            aria-hidden
            className="absolute z-20 w-[100px] rotate-[14deg]"
            style={{ right: "-72px", top: "44px" }}
          />
        </div>
      </div>

      <div className="relative flex flex-col items-center px-6 pb-10 text-center">
        <p
          className="font-bold text-slate-800 leading-relaxed whitespace-pre-line text-base"
          style={{
            backgroundImage:
              "linear-gradient(transparent 60%, rgba(180, 235, 100, 0.7) 60%)",
            backgroundRepeat: "no-repeat",
            paddingInline: "0.5rem",
          }}
        >
          {meta.subtitle}
        </p>

        <div className="mt-6">
          <PinkButton onClick={onStart} size="lg">
            {meta.startButton}
          </PinkButton>
        </div>
      </div>
    </div>
  );
}
