import type { QuizMeta } from "../types";
import { RainbowHeader } from "./RainbowHeader";
import { Sparkles } from "./Sparkles";
import { PinkButton } from "./PinkButton";

type Props = {
  meta: QuizMeta;
  onNext: () => void;
};

export function EmergencySuccessScreen({ meta, onNext }: Props) {
  return (
    <div
      className="relative h-[100dvh] flex flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #5DC3EE 0%, #80CFEC 50%, #5BB7DE 100%)",
      }}
    >
      <RainbowHeader height="220px" />
      <Sparkles />

      <div className="relative flex-1 flex flex-col items-center px-5 pt-10 pb-6 min-h-0">
        <div
          className="w-full rounded-3xl px-6 py-3 text-center"
          style={{
            background: "#62B5DB",
            boxShadow: "0 4px 0 rgba(30,120,168,0.4)",
          }}
        >
          <h2
            className="font-display text-xl text-white"
            style={{
              fontFamily: "'Black Han Sans','Jua',sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            무지개 장미 탐험대 모집 완료!
          </h2>
        </div>

        <div className="relative mt-5 w-full">
          <div
            className="rounded-3xl px-6 py-7 shadow-soft"
            style={{ background: "#62B5DB" }}
          >
            <p className="text-white leading-loose whitespace-pre-line text-center text-[15px]">
              {meta.emergencySuccessBody}
            </p>
          </div>
        </div>

        <div className="flex-1" />

        <div className="flex justify-center pt-4">
          <PinkButton onClick={onNext}>{meta.next}</PinkButton>
        </div>

        <div className="w-full mt-5 bg-deepSky text-white text-center py-4 px-4 rounded-md">
          <p className="whitespace-pre-line text-xs leading-relaxed">
            {meta.emergencySuccessNotice}
          </p>
        </div>
      </div>
    </div>
  );
}
