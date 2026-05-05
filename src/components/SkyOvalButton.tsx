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
        "relative px-12 py-3 rounded-full font-display text-2xl",
        "bg-sky-1 text-white border-[3px] border-deepSky/70",
        "shadow-[0_5px_0_rgba(30,120,168,0.7),0_10px_22px_rgba(93,195,238,0.4)]",
        "transition active:translate-y-[2px]",
        className,
      ].join(" ")}
      style={{
        textShadow: "2px 2px 0 #1E78A8, -1px -1px 0 #1E78A8, 1px -1px 0 #1E78A8, -1px 1px 0 #1E78A8",
        letterSpacing: "0.05em",
      }}
    >
      <span className="absolute left-6 right-6 top-1.5 h-[5px] rounded-full bg-white/40 blur-[1px]" aria-hidden />
      <span className="relative">{children}</span>
    </button>
  );
}
