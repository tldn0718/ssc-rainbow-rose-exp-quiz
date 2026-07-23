import type { Exhibit } from "../types";
import { ExhibitLocation } from "./ExhibitLocation";
import { RichText } from "./RichText";

type Props = {
  exhibit: Exhibit;
};

const BODY = `🌌 B전시실 관천대! 🌌

시원한 과학관에서 편하게 누워
~~캐나다의 아름다운 %%**오로라**%%를 감상하며~~
특별한 여름 여행을 마무리해 보자! 💙`;

/** 목적지 공개 — 관천대 */
export function DestinationScreen({ exhibit }: Props) {
  return (
    <div className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-white">
      <div className="relative px-5 pt-8 pb-10 flex-1 flex flex-col items-center">
        <img
          src="/assets/quiz-clear-title.webp"
          alt="Quiz Clear"
          className="w-full max-w-[300px] h-auto"
        />

        <div className="mt-6 w-full rounded-2xl overflow-hidden shadow-card">
          {exhibit.photo && (
            <img
              src={exhibit.photo}
              alt={`${exhibit.code} ${exhibit.title}`}
              className="w-full h-auto object-cover"
            />
          )}
        </div>

        <div className="mt-4 w-full flex flex-col items-center gap-1">
          <ExhibitLocation exhibit={exhibit} />
        </div>

        <div className="flex-1 flex items-center justify-center pt-4">
          <p
            className="text-slate-800 leading-loose whitespace-pre-line text-center text-[15px]"
            style={{ fontFamily: "'Jua', sans-serif", letterSpacing: "0.01em" }}
          >
            <RichText text={BODY} />
          </p>
        </div>
      </div>
    </div>
  );
}
