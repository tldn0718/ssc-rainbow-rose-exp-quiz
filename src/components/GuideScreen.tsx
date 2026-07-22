import { SkyOvalButton } from "./SkyOvalButton";

type Props = {
  onNext: () => void;
};

const BODY = `특별한 목적지에 도착하기 위해서는
다양한 교통수단을 이용해야 해!

블루미가 준비한 코스를 따라
교통수단 속 과학을
하나씩 알아보며 이동해 보자.
🚲🚌🚇🚢`;

/** 활동지 이용안내 팝업 */
export function GuideScreen({ onNext }: Props) {
  return (
    <div className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-slate-500/90 px-4 py-6">
      <div
        className="w-full rounded-[24px] animate-pop-in px-6 py-12 flex flex-col items-center gap-8"
        style={{
          background: "#D9EAFB",
          border: "3px solid #1f2937",
          boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
        }}
      >
        <p
          className="text-slate-800 leading-loose whitespace-pre-line text-center text-[16px]"
          style={{ fontFamily: "'Jua', sans-serif", letterSpacing: "0.01em" }}
        >
          {BODY}
        </p>

        <SkyOvalButton onClick={onNext}>퀴즈 시작</SkyOvalButton>
      </div>
    </div>
  );
}
