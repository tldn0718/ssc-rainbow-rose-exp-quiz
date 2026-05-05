import type { Exhibit } from "../types";
import { exhibits } from "../data";
import { RainbowHeader } from "./RainbowHeader";
import { Sparkles } from "./Sparkles";
import { PinkButton } from "./PinkButton";
import { HallMap } from "./HallMap";

type Props = {
  exhibit: Exhibit;
  isFirst: boolean;
  onNext: () => void;
};

export function MoveToScreen({ exhibit, isFirst, onNext }: Props) {
  const title = isFirst
    ? "무지개장미탐험대\n첫번째 전시물로 출발!"
    : "다음 전시물로\n이동하세요!";

  const body = isFirst
    ? `본격적으로 탐험을 시작하기 위해
첫 번째 전시물로 이동할 시간입니다.

👇 안내된 배치도와 사진을 확인하고
${exhibit.code} ${exhibit.title} 전시물로
이동해 주세요.`
    : `잘 해결했어요, 무지개장미탐험대!
이제 다음 전시물로 갈 차례입니다.

👇 안내된 배치도와 사진을 확인하고
${exhibit.code} ${exhibit.title} 전시물로
이동해 주세요.`;

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
          {"해당 전시물의 패널을 꼼꼼히 살펴보고,\n직접 체험해 보면서 퀴즈를 풀어주세요 💌"}
        </div>

        {isFirst && (
          <div className="mt-2 text-center text-slate-800 text-sm">
            무지개장미탐험대의 첫 탐험, 지금 시작합니다! 🌈
          </div>
        )}

        <div className="flex-1" />
        <div className="flex justify-center pt-6">
          <PinkButton onClick={onNext}>퀴즈풀기</PinkButton>
        </div>
      </div>
    </div>
  );
}
