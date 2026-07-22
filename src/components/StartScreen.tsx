import { SkyOvalButton } from "./SkyOvalButton";

type Props = {
  onStart: () => void;
};

export function StartScreen({ onStart }: Props) {
  return (
    <div className="relative h-[100dvh] flex flex-col overflow-hidden bg-white px-6">
      <div className="pt-[20vh] flex justify-center">
        <img
          src="/assets/bloomi-go-title.webp"
          alt="블루미 GO!"
          className="w-[300px] max-w-[85%] h-auto select-none animate-pop-in"
          draggable={false}
        />
      </div>

      <div className="mt-auto flex flex-col items-center text-center">
        <p className="font-bold text-slate-800 leading-relaxed whitespace-pre-line text-base">
          {"교통수단 속 과학을 하나씩 알아가며\n특별한 여행지로 떠나보자!"}
        </p>

        <div className="mt-8">
          <SkyOvalButton onClick={onStart} className="px-14 text-2xl">
            시작
          </SkyOvalButton>
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
