import { PinkButton } from "./PinkButton";

type Props = {
  onStart: () => void;
};

export function StartScreen({ onStart }: Props) {
  return (
    <div
      className="relative h-[100dvh] flex flex-col overflow-hidden bg-cover bg-top px-6"
      style={{ backgroundImage: "url(/assets/bg-page1.webp)" }}
    >
      <div className="pt-[24vh] flex justify-center">
        <img
          src="/assets/main-title.webp"
          alt="무지개 장미 탐험대"
          className="w-[320px] max-w-[90%] h-auto select-none animate-pop-in"
          draggable={false}
        />
      </div>

      <div className="mt-auto flex flex-col items-center text-center">
        <p className="font-bold text-slate-800 leading-relaxed whitespace-pre-line text-base">
          {"잃어버린 장미를 찾기 위한\nB전시실 빛의 탐험이 시작됩니다!"}
        </p>

        <div className="mt-6">
          <PinkButton onClick={onStart} size="lg">
            시작
          </PinkButton>
        </div>
      </div>

      <div className="mt-auto pb-6 pt-10 flex justify-center">
        <img
          src="/assets/seoul-science-logo.webp"
          alt="서울시립과학관"
          className="h-8 w-auto opacity-90 select-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
