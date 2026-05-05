import { RainbowHeader } from "./RainbowHeader";
import { Sparkles } from "./Sparkles";

const BODY = `모든 퀴즈를 해결하다니, 정말 대단해!!

전시물을 찾아다니면서 밝혀낸
무지개 장미의 신비로운 비밀은 바로
우리가 세상을 볼 수 있게 해주는 '빛'이야

무지개장미탐험대 덕분에 사라졌던 장미가 모두 모여
다시 밝게 빛나는 모습으로 피어나고,
더욱 멋진 사이언스 페스티벌을 완성할 수 있게 되었어.

이 소중한 '빛'을 기억하며,
이번 사이언스 페스티벌도 오래 기억해 주길 바라.

정말 고마워! 🌈`;

const FOOTER = `해당 페이지를 B데스크에 제시하면 소정의 기념품을 받을 수 있습니다.
※ 기념품은 조기 소진될 수 있습니다`;

export function ClearScreen() {
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

      <div className="relative px-5 pt-8 pb-0 flex-1 flex flex-col items-center min-h-0">
        <img
          src="/assets/quiz-clear-title.webp"
          alt="Quiz Clear"
          className="w-full max-w-[340px] h-auto"
        />

        <div className="mt-4 w-full rounded-3xl px-5 py-6 bg-white/90 shadow-soft animate-pop-in min-h-0 overflow-y-auto">
          <p
            className="text-slate-800 leading-relaxed whitespace-pre-line text-center text-[13.5px]"
            style={{
              fontFamily: "'Jua', sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            {BODY}
          </p>
        </div>

        <div className="flex-1 min-h-0" />

        <div className="mt-4 -mx-5 bg-deepSky text-white px-5 py-3 text-center w-[calc(100%+2.5rem)]">
          <p className="leading-relaxed whitespace-pre-line text-[12.5px]">
            {FOOTER}
          </p>
        </div>
      </div>
    </div>
  );
}
