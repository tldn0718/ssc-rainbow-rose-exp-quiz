import type { QuizMeta } from "../types";

type Props = {
  meta: QuizMeta;
  onClose: () => void;
};

/**
 * Emergency 안내 화면 위에 떠 있는 "모집 완료" 팝업.
 * 어두운 오버레이 + 모달 윈도우 + 하단 안내 박스.
 */
export function EmergencySuccessModal({ meta, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col px-5 pb-6 animate-fade-up"
      style={{ background: "rgba(20, 32, 56, 0.78)" }}
      onClick={onClose}
    >
      <div className="flex-1 flex items-center justify-center min-h-0">
        {/* 모달 윈도우: 진한 파란 chrome + 검정 외곽선 + 흰 본문 */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="w-full max-w-md rounded-2xl overflow-hidden text-left active:scale-[0.99] transition animate-pop-in"
          style={{
            border: "3px solid #1a1a1a",
            boxShadow: "0 8px 28px rgba(0,0,0,0.5)",
          }}
        >
          <div
            className="px-4 py-3 flex items-center gap-2"
            style={{
              background: "#1f9eff",
              borderBottom: "3px solid #1a1a1a",
            }}
          >
            <span
              className="w-4 h-4 rounded-full bg-white"
              style={{ border: "2px solid #1a1a1a" }}
            />
            <span
              className="w-4 h-4 rounded-full bg-white"
              style={{ border: "2px solid #1a1a1a" }}
            />
            <span
              className="w-4 h-4 rounded-full bg-white"
              style={{ border: "2px solid #1a1a1a" }}
            />
          </div>
          <div className="bg-white px-6 py-7">
            <p
              className="text-slate-800 leading-loose whitespace-pre-line text-center text-[15px]"
              style={{ fontFamily: "'Jua', sans-serif", letterSpacing: "0.01em" }}
            >
              {meta.emergencySuccessBody}
            </p>
          </div>
        </button>
      </div>

      <div
        className="w-full bg-deepSky text-white text-center py-4 px-4 rounded-md mt-4"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="whitespace-pre-line text-xs leading-relaxed">
          {meta.emergencySuccessNotice}
        </p>
      </div>
    </div>
  );
}
