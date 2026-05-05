import type { ReactNode } from "react";

type Props = {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
};

export function SkyOvalButton({ onClick, children, className = "" }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "relative px-10 py-2.5 rounded-full text-xl",
        "border-[2.5px]",
        "shadow-[0_4px_0_rgba(30,120,168,0.55)]",
        "transition active:translate-y-[2px]",
        className,
      ].join(" ")}
      style={{
        fontFamily: "'Jua', sans-serif",
        background:
          "linear-gradient(180deg, #C8ECFA 0%, #A6DEF4 100%)",
        borderColor: "#1E78A8",
        color: "#1E4A6E",
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
