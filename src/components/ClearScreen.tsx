import { RainbowHeader } from "./RainbowHeader";
import { Sparkles } from "./Sparkles";

const BODY = `모든 퀴즈를 해결하다니, 정말 대단해!!!
전시물을 찾아다니면서 밝혀낸 무지개 장미의 신비로운 비밀은 바로 우리가 세상을 볼 수 있게 해주는 '빛' 이야

무지개 장미 탐험대 덕분에 사라진 장미가 모두 모여 밝게 빛나는 빛으로 피어나 더욱 멋진 사이언스 페스티벌을 완성할 수 있게되었어!

소중한 빛을 기억하며,
사이언스 페스티벌을 기억하길 바래.
정말 고마워`;

const FOOTER = `해당 페이지를 B데스크에서 보여주면,
소정의 기념품을 받을 수 있습니다.
<기념품 소진될 수 있음>`;

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
          Quiz Clear
        </h2>

        <div
          className="mt-4 w-full rounded-3xl px-5 py-6 shadow-soft animate-pop-in min-h-0 overflow-y-auto"
          style={{ background: "#62B5DB" }}
        >
          <p className="text-white leading-relaxed whitespace-pre-line text-center text-[14px]">
            {BODY}
          </p>
        </div>

        <div className="flex-1 min-h-0" />

        <div className="mt-4 w-full bg-deepSky text-white rounded-md px-4 py-3 text-center">
          <p className="leading-relaxed whitespace-pre-line text-sm">{FOOTER}</p>
        </div>
      </div>
    </div>
  );
}
