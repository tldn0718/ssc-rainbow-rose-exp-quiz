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
        "bg-pinkBtn text-white shadow-pinkBtn",
        "border-[3px] border-pinkBtn-dark",
        "transition active:translate-y-[3px] active:shadow-[0_3px_0_#C72E6F]",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        sizing,
        className,
      ].join(" ")}
      style={{
        textShadow: "2px 2px 0 #C72E6F, -1px -1px 0 #C72E6F, 1px -1px 0 #C72E6F, -1px 1px 0 #C72E6F",
        letterSpacing: "0.05em",
      }}
    >
      <span className="absolute inset-0 rounded-full pink-stripes opacity-70" aria-hidden />
      <span className="absolute left-4 right-4 top-1.5 h-[6px] rounded-full bg-white/40 blur-[1px]" aria-hidden />
      <span className="relative">{children}</span>
    </button>
  );
}
