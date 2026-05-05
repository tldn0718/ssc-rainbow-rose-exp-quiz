import { PinkButton } from "./PinkButton";

type Props = {
  onStart: () => void;
};

export function StartScreen({ onStart }: Props) {
  return (
    <div
      className="relative h-[100dvh] flex flex-col overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/bg-start.webp)" }}
    >
      <div className="relative flex-1 flex flex-col items-center justify-start pt-[10vh] px-6">
        <div className="relative animate-pop-in w-full flex justify-center">
          <img
            src="/assets/main-title.png"
            alt="무지개 장미 탐험대"
            className="w-[320px] max-w-[90%] h-auto select-none"
            draggable={false}
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
          {"잃어버린 장미를 찾기 위한\nB전시실 빛의 탐험이 시작됩니다!"}
        </p>

        <div className="mt-6">
          <PinkButton onClick={onStart} size="lg">
            시작
          </PinkButton>
        </div>
      </div>
    </div>
  );
}
