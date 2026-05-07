import { useState } from "react";
import { SkyOvalButton } from "./SkyOvalButton";
import { EmergencyHeader } from "./EmergencyHeader";
import { EmergencySuccessModal } from "./EmergencySuccessModal";

type Props = {
  onYes: () => void;
  onNo: () => void;
};

const BODY = `안녕, B전시실에 온 걸 환영해.
나는 B전시실 길잡이 요정 '블루미'야

사실... 사이언스 페스티벌을 맞이해 준비했던
'무지개 장미'가 감쪽같이 사라져버렸어.

무지개 장미를 되찾기 위해서는
그 안에 숨겨진 신비로운 비밀을 알아내야 해.
그리고 그 비밀은
전시물 속 퀴즈를 해결해야만 알 수 있어.

어때?
무지개 장미 탐험대가 되어
나와 함께 '무지개 장미'를 찾아줄 수 있겠니?`;

export function EmergencyScreen({ onYes, onNo }: Props) {
  const [successOpen, setSuccessOpen] = useState(false);

  const handleYes = () => setSuccessOpen(true);
  const handleSuccessClose = () => {
    setSuccessOpen(false);
    onYes();
  };

  return (
    <div
      className="relative h-[100dvh] flex flex-col overflow-hidden bg-cover bg-top"
      style={{ backgroundImage: "url(/assets/bg-page2.webp)" }}
    >
      <div className="relative flex-1 flex flex-col items-center pt-6 min-h-0">
        <div className="relative z-10 px-5 shrink-0">
          <EmergencyHeader />
        </div>

        <div className="relative flex-1 w-full px-[14%] pt-6 pb-[18%] flex items-center justify-center">
          <p
            className="text-slate-800 leading-relaxed whitespace-pre-line text-center text-[14px]"
            style={{
              fontFamily: "'Jua', sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            {BODY}
          </p>
        </div>

        <div className="w-full flex justify-between items-center pb-6 px-6 z-10 shrink-0">
          <SkyOvalButton onClick={handleYes} className="flex-1 max-w-[42%]">
            네
          </SkyOvalButton>
          <SkyOvalButton onClick={onNo} className="flex-1 max-w-[42%]">
            아니요
          </SkyOvalButton>
        </div>
      </div>

      {successOpen && <EmergencySuccessModal onClose={handleSuccessClose} />}
    </div>
  );
}
