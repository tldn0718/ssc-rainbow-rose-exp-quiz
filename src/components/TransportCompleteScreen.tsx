import type { Transport } from "../types";
import { RichText } from "./RichText";
import { SkyOvalButton } from "./SkyOvalButton";

type Props = {
  transport: Transport;
  onNext: () => void;
};

/** 교통수단 구간 퀴즈 완료 팝업 (Great job!) */
export function TransportCompleteScreen({ transport, onNext }: Props) {
  return (
    <div className="relative min-h-[100dvh] flex flex-col bg-slate-500/90 px-4 py-6">
      <div
        className="flex-1 w-full rounded-[24px] animate-pop-in px-6 py-10 flex flex-col items-center"
        style={{
          background: "#D9EAFB",
          border: "3px solid #1f2937",
          boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
        }}
      >
        <h2
          className="text-center text-[46px] leading-none select-none"
          style={{
            fontFamily: "'Bubblegum Sans','Jua',sans-serif",
            color: "#FFD400",
            WebkitTextStroke: "2px #1f2937",
            paintOrder: "stroke fill",
            textShadow: "0 4px 0 #1f2937",
          }}
        >
          Great job!
        </h2>

        <div className="flex-1 flex items-center justify-center py-6">
          <p
            className="text-slate-800 leading-relaxed whitespace-pre-line text-center text-[14.5px]"
            style={{ fontFamily: "'Jua', sans-serif", letterSpacing: "0.01em" }}
          >
            <RichText text={transport.complete} />
          </p>
        </div>

        <SkyOvalButton onClick={onNext}>다음</SkyOvalButton>
      </div>
    </div>
  );
}
