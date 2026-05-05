import type { QuizMeta } from "../types";
import { RainbowHeader } from "./RainbowHeader";
import { Sparkles } from "./Sparkles";
import { SkyOvalButton } from "./SkyOvalButton";
import { EmergencyHeader } from "./EmergencyHeader";

type Props = {
  meta: QuizMeta;
  onYes: () => void;
  onNo: () => void;
};

export function EmergencyScreen({ meta, onYes, onNo }: Props) {
  return (
    <div
      className="relative min-h-[100dvh] flex flex-col overflow-x-hidden"
      style={{
        background:
          "linear-gradient(180deg, #5DC3EE 0%, #80CFEC 50%, #5BB7DE 100%)",
      }}
    >
      <RainbowHeader height="240px" />
      <Sparkles />

      <div className="relative flex-1 flex flex-col items-center px-5 pt-8">
        <EmergencyHeader meta={meta} />

        <div className="relative mt-6 w-full">
          <div className="relative bg-white rounded-3xl px-6 py-7 shadow-soft">
            <p className="text-slate-800 leading-loose whitespace-pre-line text-center text-[15px]">
              {meta.emergencyBody}
            </p>
          </div>
        </div>

        <div className="flex-1" />

        <div className="flex gap-6 pb-10 pt-8">
          <SkyOvalButton onClick={onYes}>{meta.emergencyYes}</SkyOvalButton>
          <SkyOvalButton onClick={onNo}>{meta.emergencyNo}</SkyOvalButton>
        </div>
      </div>
    </div>
  );
}
