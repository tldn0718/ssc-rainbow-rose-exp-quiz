import { SkyOvalButton } from "./SkyOvalButton";

type Props = {
  onNext: () => void;
};

/** 블루미의 이동 경로 (총 소요시간 타임라인) */
export function RouteScreen({ onNext }: Props) {
  return (
    <div className="relative min-h-[100dvh] flex flex-col bg-slate-500/90 px-4 py-6">
      <div
        className="flex-1 w-full rounded-[24px] overflow-hidden animate-pop-in flex flex-col"
        style={{
          background: "#EAF4FD",
          border: "3px solid #1f2937",
          boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
        }}
      >
        <div className="flex-1 overflow-y-auto">
          <div className="pt-6 pb-1 flex justify-center">
            <img
              src="/assets/route-title.webp"
              alt="이동 경로"
              className="w-[150px] h-auto select-none"
              draggable={false}
            />
          </div>
          <img
            src="/assets/route-map.webp"
            alt="블루미의 이동 경로 — 총 소요시간 약 15분"
            className="w-full h-auto"
            draggable={false}
          />
        </div>

        <div className="py-4 flex justify-center shrink-0 bg-white/70">
          <SkyOvalButton onClick={onNext}>퀴즈 시작</SkyOvalButton>
        </div>
      </div>
    </div>
  );
}
