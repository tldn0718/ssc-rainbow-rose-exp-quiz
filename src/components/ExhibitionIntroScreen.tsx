import { Sparkles } from "./Sparkles";
import { PinkButton } from "./PinkButton";

type Props = {
  onNext: () => void;
};

const BODY = `B전시실은 '연결'을 주제로 한 전시물로
구성되어 있습니다.

교통, 뇌의 신경망, 정보 네트워크,
그리고 우주의 구조까지
세상의 다양한 시스템은
서로 연결된 구조 속에서 작동합니다.

이러한 연결을 가능하게 하는 요소로서
빛의 역할도 함께 살펴볼 수 있습니다.`;

export function ExhibitionIntroScreen({ onNext }: Props) {
  return (
    <div
      className="relative h-[100dvh] flex flex-col overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/intro-bg.webp)" }}
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
          B전시실 소개
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
            {BODY}
          </p>

          <div className="mt-8">
            <PinkButton onClick={onNext}>다음으로</PinkButton>
          </div>
        </div>
      </div>

      <div className="relative pb-6 px-6">
        <p className="text-center text-[13px] text-slate-700 font-semibold whitespace-pre-line">
          ※ 본 활동지는 B전시실 전시물에만 적용됩니다.
        </p>
      </div>
    </div>
  );
}
