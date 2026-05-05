import type { ReactNode } from "react";

type Props = {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
};

export function PinkButton({
  onClick,
  children,
  className = "",
  disabled,
  size = "md",
}: Props) {
  const sizing =
    size === "lg"
      ? "px-12 py-4 text-3xl"
      : size === "sm"
        ? "px-6 py-2.5 text-lg"
        : "px-10 py-3.5 text-2xl";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        "relative inline-flex items-center justify-center rounded-full font-display",
        disabled
          ? "bg-slate-300 text-white border-[3px] border-slate-400 shadow-[0_4px_0_#94a3b8] cursor-not-allowed"
          : "bg-pinkBtn text-white border-[3px] border-pinkBtn-dark shadow-pinkBtn",
        "transition active:translate-y-[3px]",
        sizing,
        className,
      ].join(" ")}
      style={{
        fontFamily: "'Black Han Sans','Jua',sans-serif",
        color: "#fff",
        WebkitTextStroke: disabled ? "1px #64748b" : "1px #C72E6F",
        paintOrder: "stroke fill",
        letterSpacing: "0.05em",
      }}
    >
      {!disabled && (
        <>
          <span
            className="absolute inset-0 rounded-full pink-stripes opacity-70"
            aria-hidden
          />
          <span
            className="absolute left-4 right-4 top-1.5 h-[6px] rounded-full bg-white/40 blur-[1px]"
            aria-hidden
          />
        </>
      )}
      <span className="relative">{children}</span>
    </button>
  );
}
