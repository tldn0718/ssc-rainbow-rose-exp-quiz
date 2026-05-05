type Props = {
  onClose: () => void;
};

const BODY = `무지개 장미 탐험대가 되어주신 여러분
감사합니다!

지금부터 전시물을 찾아가며
패널을 꼼꼼히 살펴보고 직접 체험해보면서
준비된 퀴즈를 하나씩 풀어주세요.

총 10개의 퀴즈를 모두 해결하면
'무지개 장미'의 신비로운 비밀을
알아낼 수 있습니다.`;

const NOTICE = `B전시실 내에서 본 활동지의 모든 퀴즈를
해결하시면 소정의 기념품을 받을 수 있습니다.
※ 기념품은 조기 소진될 수 있습니다.`;

export function EmergencySuccessModal({ onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col px-5 pb-6 animate-fade-up"
      style={{ background: "rgba(20, 32, 56, 0.78)" }}
      onClick={onClose}
    >
      <div className="flex-1 flex items-center justify-center min-h-0">
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
              {BODY}
            </p>
          </div>
        </button>
      </div>

      <div
        className="w-full bg-[#3779B4] text-white text-center py-4 px-4 rounded-md mt-4"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="whitespace-pre-line text-xs leading-relaxed">{NOTICE}</p>
      </div>
    </div>
  );
}
