import type { QuizMeta } from "../types";
import { PinkButton } from "./PinkButton";
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
      {/* 큰 무지개: 타이틀 뒤를 감싸는 위치에 배치 */}
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2"
        style={{ top: "-30%", width: "180%", height: "70%" }}
        aria-hidden
      >
        <div
          className="absolute inset-0 rounded-[50%]"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 50% 100%,
              transparent 0%, transparent 40%,
              rgba(255,143,163,0.95) 41%,
              rgba(255,179,107,0.95) 47%,
              rgba(255,224,102,0.95) 53%,
              rgba(181,228,140,0.95) 59%,
              rgba(128,207,255,0.95) 65%,
              rgba(194,155,255,0.85) 70%,
              transparent 76%)`,
            filter: "blur(2px)",
          }}
        />
      </div>

      <Sparkles />

      <div className="relative flex-1 flex flex-col items-center justify-center px-6">
        {/* 타이틀 + 장미 */}
        <div className="relative animate-pop-in">
          {/* TODO[asset]: "무지개 장미 탐험대" 손글씨 일러스트 */}
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
          <span
            className="absolute text-4xl rotate-[-15deg] z-20"
            style={{ left: "-18px", top: "82px" }}
            aria-hidden
          >
            🌹
          </span>
          <span
            className="absolute text-4xl rotate-[12deg] z-20"
            style={{ right: "-12px", top: "30px" }}
            aria-hidden
          >
            🌹
          </span>
        </div>
      </div>

      <div className="wave-divider" />
      <div className="bg-sky-2" style={{ height: "8px" }} />

      <div className="relative flex flex-col items-center px-6 pt-6 pb-10 text-center">
        <p
          className="font-bold text-slate-800 leading-relaxed whitespace-pre-line text-base"
          style={{
            backgroundImage:
              "linear-gradient(transparent 60%, rgba(180, 235, 100, 0.6) 60%)",
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
