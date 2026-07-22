import type { ReactNode } from "react";

type Props = {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
};

export function SkyOvalButton({
  onClick,
  children,
  className = "",
  disabled,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        "relative px-10 py-2.5 rounded-full text-xl",
        "border-[2.5px]",
        disabled
          ? "shadow-[0_4px_0_rgba(100,116,139,0.45)] cursor-not-allowed"
          : "shadow-[0_4px_0_rgba(30,120,168,0.55)]",
        "transition active:translate-y-[2px]",
        className,
      ].join(" ")}
      style={{
        fontFamily: "'Jua', sans-serif",
        background: disabled
          ? "linear-gradient(180deg, #E2E8F0 0%, #CBD5E1 100%)"
          : "linear-gradient(180deg, #C8ECFA 0%, #A6DEF4 100%)",
        borderColor: disabled ? "#94A3B8" : "#1E78A8",
        color: disabled ? "#64748B" : "#1E4A6E",
        letterSpacing: "0.04em",
        minWidth: "112px",
      }}
    >
      <span
        className="absolute left-5 right-5 top-1 h-[4px] rounded-full bg-white/55 blur-[0.5px]"
        aria-hidden
      />
      <span className="relative">{children}</span>
    </button>
  );
}
