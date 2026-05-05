import type { Exhibit, QuizMeta } from "../types";
import { Sparkles } from "./Sparkles";
import { PinkButton } from "./PinkButton";
import { HallMap } from "./HallMap";

type Props = {
  meta: QuizMeta;
  exhibits: Exhibit[];
  onNext: () => void;
};

const TOP_CODES = ["B42", "B47", "B12"];
const BOTTOM_CODES = ["B41", "B26"];

export function ExhibitsOverviewScreen({ meta, exhibits, onNext }: Props) {
  const byCode = Object.fromEntries(exhibits.map((e) => [e.code, e]));
  const topRow = TOP_CODES.map((c) => byCode[c]).filter(Boolean);
  const bottomRow = BOTTOM_CODES.map((c) => byCode[c]).filter(Boolean);

  return (
    <div className="relative min-h-[100dvh] flex flex-col overflow-x-hidden bg-sky-1">
      <Sparkles />

      <div className="relative px-4 pt-8 pb-6 flex-1 flex flex-col">
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

        <div className="mt-5 grid grid-cols-3 gap-2">
          {topRow.map((ex, i) => (
            <ExhibitCard
              key={ex.id}
              exhibit={ex}
              direction="down"
              tilt={i === 0 ? -3 : i === 2 ? 3 : 0}
            />
          ))}
        </div>

        <div className="mt-4">
          <HallMap exhibits={exhibits} />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {bottomRow.map((ex, i) => (
            <ExhibitCard
              key={ex.id}
              exhibit={ex}
              direction="up"
              tilt={i === 0 ? -3 : 3}
            />
          ))}
        </div>

        <div className="flex-1 min-h-[24px]" />
        <div className="flex justify-center pt-4">
          <PinkButton onClick={onNext}>{meta.startQuizButton}</PinkButton>
        </div>
      </div>
    </div>
  );
}

function ExhibitCard({
  exhibit,
  direction,
  tilt = 0,
}: {
  exhibit: Exhibit;
  direction: "up" | "down";
  tilt?: number;
}) {
  return (
    <div
      className="flex flex-col items-center"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="w-full aspect-square rounded-lg overflow-hidden bg-slate-700 shadow-md">
        {exhibit.photo && (
          <img
            src={exhibit.photo}
            alt={exhibit.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="mt-1 w-full bg-white rounded-md border border-slate-200 px-1.5 py-1 text-[10px] leading-tight text-center shadow-sm">
        <div className="flex items-center justify-center gap-0.5">
          <img
            src="/assets/pin.webp"
            alt=""
            aria-hidden
            className="w-2 h-auto"
          />
          <span className="font-bold text-slate-800">{exhibit.code}</span>
        </div>
        <div className="text-slate-700 line-clamp-2 mt-0.5">
          {exhibit.title}
        </div>
      </div>
      <Arrow direction={direction} />
    </div>
  );
}

function Arrow({ direction }: { direction: "up" | "down" }) {
  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      className={direction === "up" ? "rotate-180 -mt-1" : "-mb-1 mt-1"}
      aria-hidden
    >
      <path
        d="M12 0 L12 14 M5 8 L12 16 L19 8"
        stroke="#FFD84D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
