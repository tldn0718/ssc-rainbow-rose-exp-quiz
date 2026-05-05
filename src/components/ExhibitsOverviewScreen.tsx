import type { Exhibit, QuizMeta } from "../types";
import { RainbowHeader } from "./RainbowHeader";
import { Sparkles } from "./Sparkles";
import { PinkButton } from "./PinkButton";
import { HallMap } from "./HallMap";

type Props = {
  meta: QuizMeta;
  exhibits: Exhibit[];
  onNext: () => void;
};

export function ExhibitsOverviewScreen({ meta, exhibits, onNext }: Props) {
  return (
    <div
      className="relative min-h-[100dvh] flex flex-col overflow-x-hidden"
      style={{
        background:
          "linear-gradient(180deg, #5DC3EE 0%, #87D4F0 30%, #C0E5F4 60%, #DCEEEA 100%)",
      }}
    >
      <RainbowHeader height="200px" />
      <Sparkles />

      <div className="relative px-5 pt-8 pb-8 flex-1 flex flex-col">
        <h2
          className="font-display text-4xl text-white text-center"
          style={{
            fontFamily: "'Black Han Sans','Jua',sans-serif",
            WebkitTextStroke: "2px #ffffff",
            textShadow:
              "3px 3px 0 #1f2937, -1px -1px 0 #1f2937, 1px -1px 0 #1f2937, -1px 1px 0 #1f2937",
            transform: "rotate(-2deg)",
          }}
        >
          {meta.exhibitsOverviewTitle}
        </h2>

        <div className="mt-6">
          <HallMap exhibits={exhibits} />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          {exhibits.map((ex) => (
            <ExhibitThumb key={ex.id} exhibit={ex} />
          ))}
        </div>

        <div className="flex-1" />
        <div className="flex justify-center pt-8">
          <PinkButton onClick={onNext}>{meta.next}</PinkButton>
        </div>
      </div>
    </div>
  );
}

function ExhibitThumb({ exhibit }: { exhibit: Exhibit }) {
  return (
    <div>
      {/* TODO[asset]: 전시물 사진 — 현재 컬러 플레이스홀더 */}
      <div
        className="aspect-square rounded-xl bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center text-white/60 text-3xl"
        aria-label={exhibit.code}
      >
        🖼️
      </div>
      <div className="mt-2 flex items-start gap-1">
        <span className="text-pinkBtn shrink-0 text-base mt-0.5">📍</span>
        <div>
          <div className="font-bold text-slate-700">{exhibit.code}</div>
          <div className="text-xs text-slate-700 leading-snug">
            {exhibit.title}
          </div>
        </div>
      </div>
    </div>
  );
}
