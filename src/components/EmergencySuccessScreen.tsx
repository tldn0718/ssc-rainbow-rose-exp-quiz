import type { QuizMeta } from "../types";
import { RainbowHeader } from "./RainbowHeader";
import { Sparkles } from "./Sparkles";
import { EmergencyHeader } from "./EmergencyHeader";

type Props = {
  meta: QuizMeta;
  onNext: () => void;
};

export function EmergencySuccessScreen({ meta, onNext }: Props) {
  return (
    <div
      className="relative h-[100dvh] flex flex-col overflow-hidden bg-slate-700"
    >
      <div className="absolute inset-0 opacity-60">
        <RainbowHeader height="280px" />
      </div>
      <Sparkles />

      <div className="relative flex-1 flex flex-col items-center px-5 pt-8 pb-6 min-h-0">
        <div className="opacity-80">
          <EmergencyHeader meta={meta} />
        </div>

        {/* 모달 윈도우 스타일: 위쪽 동그라미 3개 + 흰 카드 본문 */}
        <button
          type="button"
          onClick={onNext}
          className="mt-5 w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-300 text-left active:scale-[0.99] transition"
        >
          <div className="bg-sky-1 px-4 py-3 flex items-center gap-2 border-b-2 border-slate-300">
            <span className="w-3.5 h-3.5 rounded-full bg-white border-2 border-slate-300" />
            <span className="w-3.5 h-3.5 rounded-full bg-white border-2 border-slate-300" />
            <span className="w-3.5 h-3.5 rounded-full bg-white border-2 border-slate-300" />
          </div>
          <div className="bg-white px-6 py-7">
            <p className="text-slate-800 leading-loose whitespace-pre-line text-center text-[15px]">
              {meta.emergencySuccessBody}
            </p>
          </div>
        </button>

        <div className="flex-1" />

        <div className="w-full bg-deepSky text-white text-center py-4 px-4 rounded-md">
          <p className="whitespace-pre-line text-xs leading-relaxed">
            {meta.emergencySuccessNotice}
          </p>
        </div>
      </div>
    </div>
  );
}
