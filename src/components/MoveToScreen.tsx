import type { Exhibit } from "../types";
import { exhibits } from "../data";
import { PinkButton } from "./PinkButton";
import { HallMap } from "./HallMap";

type Props = {
  exhibit: Exhibit;
  isFirst: boolean;
  isLast: boolean;
  previousExhibitCode?: string;
  onNext: () => void;
};

export function MoveToScreen({
  exhibit,
  isFirst,
  isLast,
  previousExhibitCode,
  onNext,
}: Props) {
  const title = isFirst
    ? "무지개장미탐험대\n첫번째 전시물로 출발!"
    : isLast
      ? "마지막 전시물로\n이동해주세요"
      : "다음 전시물로\n이동해주세요";

  const subtitle = isFirst
    ? "무지개 장미 탐험대의 미션, 지금 시작합니다!"
    : isLast
      ? "잘 해결했어요, 이제 마지막 전시물로 갈 차례입니다!"
      : "잘 해결했어요, 이제 다음 전시물로 갈 차례입니다!";

  const highlightLabel = `'${exhibit.code} ${exhibit.title}'`;

  return (
    <div
      className="relative min-h-[100dvh] flex flex-col overflow-x-hidden"
      style={{
        backgroundImage: "url('/assets/bg-move.png')",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#E8F8FA",
      }}
    >
      <div className="relative px-5 pt-10 pb-6 flex-1 flex flex-col">
        <h2
          className="font-display text-[28px] text-center leading-[1.15] whitespace-pre-line"
          style={{
            fontFamily: "'Black Han Sans','Jua',sans-serif",
            color: "#fff",
            WebkitTextStroke: "1.2px #1f2937",
            paintOrder: "stroke fill",
            textShadow: "0 3px 0 #1f2937",
            letterSpacing: "0.02em",
          }}
        >
          {title}
        </h2>

        <p
          className="mt-3 text-center text-[14px] font-semibold"
          style={{
            color: "#fff",
            textShadow: "0 1px 2px rgba(31,41,55,0.35)",
          }}
        >
          {subtitle}
        </p>

        <div className="mt-6 flex items-start gap-3">
          <div className="w-[32%] aspect-square rounded-xl overflow-hidden bg-slate-700 shadow-card flex-shrink-0">
            {exhibit.photo && (
              <img
                src={exhibit.photo}
                alt={exhibit.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="flex-1 min-w-0 pt-1 text-[12px] leading-[1.65] text-slate-800">
            <div>왼쪽 사진과 아래 지도를 확인하고</div>
            <div className="my-0.5 whitespace-nowrap overflow-hidden text-[11px]">
              <span
                className="font-semibold"
                style={{
                  backgroundImage: "url('/assets/highlight-brush.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 70%",
                  backgroundPosition: "0 100%",
                  paddingLeft: "2px",
                  paddingRight: "2px",
                }}
              >
                {highlightLabel}
              </span>
            </div>
            <div>전시물로 이동해주세요.</div>
          </div>
        </div>

        <div className="mt-5">
          <HallMap
            exhibits={exhibits}
            highlightCode={exhibit.code}
            routeFromCode={previousExhibitCode}
            routeFromEntrance={isFirst}
          />
        </div>

        <div className="mt-6 text-center text-slate-800 text-[14px] leading-[1.6]">
          <div>전시물 앞에 도착하셨다면,</div>
          <div>아래 버튼을 눌러 퀴즈를 풀어주세요.</div>
        </div>

        <div className="flex-1" />
        <div className="flex justify-center pt-6">
          <PinkButton onClick={onNext}>퀴즈풀기</PinkButton>
        </div>
      </div>
    </div>
  );
}
