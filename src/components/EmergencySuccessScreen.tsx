import type { QuizMeta } from "../types";
import { RainbowHeader } from "./RainbowHeader";
import { Sparkles } from "./Sparkles";
import { SkyOvalButton } from "./SkyOvalButton";
import { EmergencyHeader } from "./EmergencyHeader";

type Props = {
  meta: QuizMeta;
  onNext: () => void;
};

export function EmergencySuccessScreen({ meta, onNext }: Props) {
  return (
    <div className="relative h-[100dvh] flex flex-col bg-slate-700 overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <RainbowHeader height="280px" />
      </div>
      <Sparkles />

      <div className="relative flex-1 flex flex-col items-center px-5 pt-8 pb-6">
        <div className="opacity-60">
          <EmergencyHeader meta={meta} />
        </div>

        <div className="relative mt-5 w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-300">
          <div className="bg-sky-1 px-4 py-3 flex items-center gap-2 border-b-2 border-slate-300">
            <span className="w-4 h-4 rounded-full bg-white border-2 border-slate-300" />
            <span className="w-4 h-4 rounded-full bg-white border-2 border-slate-300" />
            <span className="w-4 h-4 rounded-full bg-white border-2 border-slate-300" />
          </div>
          <div className="bg-sky-4 px-6 py-8">
            <p className="text-slate-800 leading-loose whitespace-pre-line text-center text-[15px]">
              {meta.emergencySuccessBody}
            </p>
            <div className="flex justify-center mt-6">
              <SkyOvalButton onClick={onNext}>{meta.next}</SkyOvalButton>
            </div>
          </div>
        </div>

        <div className="flex-1" />

        <div className="w-full bg-deepSky text-white text-center py-5 px-4 rounded-md">
          <p className="whitespace-pre-line text-sm leading-relaxed">
            {meta.emergencySuccessNotice}
          </p>
        </div>
      </div>
    </div>
  );
}
