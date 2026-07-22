import { useState } from "react";
import type { Exhibit } from "../types";

type Props = {
  exhibit: Exhibit;
  /** 핀 아래 "누르면, 전시물 위치를 확인해볼 수 있어요" 힌트 표시 여부 */
  showHint?: boolean;
};

/** 전시물 코드/이름 핀 버튼 — 누르면 배치도 팝업 */
export function ExhibitLocation({ exhibit, showHint = true }: Props) {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="min-w-0">
      <button
        type="button"
        onClick={() => setShowMap(true)}
        aria-label={`${exhibit.code} 위치 배치도 보기`}
        className="flex items-center gap-1.5 rounded-full bg-sky-3/60 px-3 py-1.5 text-[11px] font-bold text-slate-700 max-w-full text-left transition active:scale-[0.98] hover:bg-sky-3/80 cursor-pointer"
      >
        <span className="text-pinkBtn shrink-0">📍</span>
        <span className="text-pinkBtn font-bold shrink-0">{exhibit.code}</span>
        <span className="text-slate-700 leading-tight break-keep">
          {exhibit.title}
        </span>
      </button>
      {showHint && (
        <p className="mt-1 pl-2 text-[11px] text-slate-500">
          누르면, 전시물 위치를 확인해볼 수 있어요
        </p>
      )}

      {showMap && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${exhibit.code} 위치 배치도`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setShowMap(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-white p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-pinkBtn">📍</span>
              <span className="text-pinkBtn font-bold text-sm">
                {exhibit.code}
              </span>
              <span className="text-slate-700 text-sm leading-tight break-keep">
                {exhibit.title}
              </span>
            </div>
            {exhibit.layoutMap && (
              <img
                src={exhibit.layoutMap}
                alt={`${exhibit.code} 위치 배치도`}
                className="w-full h-auto rounded-lg"
              />
            )}
            <button
              type="button"
              onClick={() => setShowMap(false)}
              className="mt-4 w-full rounded-full bg-pinkBtn text-white font-bold py-2.5 text-sm active:scale-[0.98]"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
