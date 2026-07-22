import type { Exhibit, Transport } from "../types";
import { SkyOvalButton } from "./SkyOvalButton";

type Props = {
  transport: Transport;
  exhibit: Exhibit;
  onNext: () => void;
};

export function MoveToScreen({ transport, exhibit, onNext }: Props) {
  const highlightLabel = `'${exhibit.code} ${exhibit.title}'`;

  return (
    <div className="relative min-h-[100dvh] flex flex-col overflow-x-hidden bg-white">
      <div className="relative px-5 pt-10 pb-6 flex-1 flex flex-col">
        <h1
          className="text-center text-[32px] leading-[1.2] text-slate-900"
          style={{ fontFamily: "'Black Han Sans','Jua',sans-serif" }}
        >
          {transport.ordinal}
          <br />: {transport.vehicle}
        </h1>

        <p
          className="mt-6 text-center text-[14px] leading-relaxed whitespace-pre-line text-slate-800"
          style={{ fontFamily: "'Jua', sans-serif", letterSpacing: "0.01em" }}
        >
          {transport.intro}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <div className="w-[36%] aspect-square rounded-xl overflow-hidden bg-slate-200 shadow-card flex-shrink-0">
            {exhibit.photo && (
              <img
                src={exhibit.photo}
                alt={exhibit.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="flex-1 min-w-0 text-[13px] leading-[1.7] text-slate-800">
            <div>왼쪽 사진을 확인하고</div>
            <div className="my-0.5">
              <span
                className="font-semibold"
                style={{
                  background:
                    "linear-gradient(transparent 35%, #D3F36B 35%, #D3F36B 92%, transparent 92%)",
                  WebkitBoxDecorationBreak: "clone",
                  boxDecorationBreak: "clone",
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

        <div className="mt-10 text-center text-slate-800 text-[14px] leading-[1.7]">
          <div>전시물 앞에 도착하셨다면,</div>
          <div>아래 버튼을 눌러 퀴즈를 풀어주세요.</div>
        </div>

        <div className="flex-1" />
        <div className="flex justify-center pt-8 pb-2">
          <SkyOvalButton onClick={onNext}>퀴즈 풀기</SkyOvalButton>
        </div>
      </div>
    </div>
  );
}
