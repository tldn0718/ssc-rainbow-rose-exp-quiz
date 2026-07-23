import { RichText } from "./RichText";
import { SkyOvalButton } from "./SkyOvalButton";

type Props = {
  onNext: () => void;
};

const BODY = `모든 퀴즈를 해결하다니, 정말 대단해! 👏

우리가 매일 이용하는 다양한 교통수단 속에는
생각보다 많은 **과학 원리**가 숨어 있다는 걸
알게 되었지? 🚲🚌🚇🚢

이제 앞으로 교통수단을 이용할 때마다
__"이 안에는 어떤 과학이 숨어 있을까?"__
하고 한 번 떠올려 봐!

그리고 드디어…
==블루미가 준비한 **특별한 목적지**==를
공개할 시간이야! ✨

너희가 도착할 곳은 바로…`;

export function ClearScreen({ onNext }: Props) {
  return (
    <div className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-white">
      <div className="relative px-5 pt-8 pb-8 flex-1 flex flex-col items-center min-h-0">
        <img
          src="/assets/quiz-clear-title.webp"
          alt="Quiz Clear"
          className="w-full max-w-[340px] h-auto"
        />

        <div className="relative flex-1 w-full px-[6%] pt-6 pb-4 flex items-center justify-center min-h-0">
          <p
            className="text-slate-800 leading-relaxed whitespace-pre-line text-center text-[14.5px]"
            style={{ fontFamily: "'Jua', sans-serif", letterSpacing: "0.01em" }}
          >
            <RichText text={BODY} />
          </p>
        </div>

        <div className="pt-2 shrink-0">
          <SkyOvalButton onClick={onNext}>목적지 공개</SkyOvalButton>
        </div>
      </div>
    </div>
  );
}
