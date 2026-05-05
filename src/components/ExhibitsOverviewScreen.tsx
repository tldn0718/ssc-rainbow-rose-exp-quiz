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
      <RainbowHeader height="180px" />
      <Sparkles />

      <div className="relative px-4 pt-10 pb-6 flex-1 flex flex-col">
        <h2
          className="font-display text-3xl text-white text-center"
          style={{
            fontFamily: "'Black Han Sans','Jua',sans-serif",
            color: "#fff",
            WebkitTextStroke: "1px #1f2937",
            paintOrder: "stroke fill",
            textShadow: "0 3px 0 #1f2937",
          }}
        >
          {meta.exhibitsOverviewTitle}
        </h2>

        <div className="mt-4">
          <HallMap exhibits={exhibits} />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {exhibits.map((ex) => (
            <ExhibitThumb key={ex.id} exhibit={ex} />
          ))}
        </div>

        <div className="flex-1" />
        <div className="flex justify-center pt-5">
          <PinkButton onClick={onNext}>{meta.next}</PinkButton>
        </div>
      </div>
    </div>
  );
}

function ExhibitThumb({ exhibit }: { exhibit: Exhibit }) {
  return (
    <div className="text-[11px]">
      <div className="aspect-square rounded-lg overflow-hidden bg-slate-700">
        {exhibit.photo && (
          <img
            src={exhibit.photo}
            alt={exhibit.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="mt-1.5 flex items-start gap-0.5">
        <img
          src="/assets/pin.png"
          alt=""
          aria-hidden
          className="w-2.5 h-auto shrink-0 mt-0.5"
        />
        <div className="leading-tight">
          <div className="font-bold text-slate-700">{exhibit.code}</div>
          <div className="text-slate-700 line-clamp-2">{exhibit.title}</div>
        </div>
      </div>
    </div>
  );
}
