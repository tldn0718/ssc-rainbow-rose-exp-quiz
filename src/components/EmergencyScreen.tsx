import { useState } from "react";
import type { QuizMeta } from "../types";
import { Sparkles } from "./Sparkles";
import { SkyOvalButton } from "./SkyOvalButton";
import { EmergencyHeader } from "./EmergencyHeader";
import { EmergencySuccessModal } from "./EmergencySuccessModal";

type Props = {
  meta: QuizMeta;
  onYes: () => void;
  onNo: () => void;
};

export function EmergencyScreen({ meta, onYes, onNo }: Props) {
  const [successOpen, setSuccessOpen] = useState(false);

  const handleYes = () => setSuccessOpen(true);
  const handleSuccessClose = () => {
    setSuccessOpen(false);
    onYes();
  };

  return (
    <div
      className="relative h-[100dvh] flex flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #5DC3EE 0%, #8FD6F0 60%, #A6E0F4 100%)",
      }}
    >
      <img
        src="/assets/emergency-rainbow.png"
        alt=""
        aria-hidden
        className="absolute inset-x-0 top-0 w-full pointer-events-none"
      />
      <Sparkles />

      <div className="relative flex-1 flex flex-col items-center pt-6 min-h-0">
        <div className="relative z-10 px-5 shrink-0">
          <EmergencyHeader meta={meta} />
        </div>

        <div
          className="relative w-full -mt-6 z-0"
          style={{
            aspectRatio: "1081 / 1577",
            maxWidth: "min(100%, calc((100dvh - 130px) * 1081 / 1577))",
          }}
        >
          <img
            src="/assets/envelope-card.png"
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full pointer-events-none"
          />
          <div className="absolute inset-0 flex items-center justify-center px-[12%] pt-[14%] pb-[22%]">
            <p
              className="text-slate-800 leading-relaxed whitespace-pre-line text-center text-[14px]"
              style={{
                fontFamily: "'Jua', sans-serif",
                letterSpacing: "0.01em",
              }}
            >
              {meta.emergencyBody}
            </p>
          </div>
        </div>

        <div className="w-full flex justify-between items-center -mt-20 pb-3 px-6 z-10 shrink-0">
          <SkyOvalButton onClick={handleYes} className="flex-1 max-w-[42%]">
            {meta.emergencyYes}
          </SkyOvalButton>
          <SkyOvalButton onClick={onNo} className="flex-1 max-w-[42%]">
            {meta.emergencyNo}
          </SkyOvalButton>
        </div>
      </div>

      {successOpen && (
        <EmergencySuccessModal meta={meta} onClose={handleSuccessClose} />
      )}
    </div>
  );
}
