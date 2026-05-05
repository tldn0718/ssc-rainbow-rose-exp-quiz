type Props = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: Props) {
  const pct = Math.min(100, Math.round((current / total) * 100));
  return (
    <div className="w-full">
      <div className="text-sm font-bold text-slate-700 mb-1">
        {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
      <div className="relative h-3.5 w-full rounded-md overflow-hidden progress-track">
        <div
          className="absolute inset-y-0 left-0 progress-fill transition-[width] duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
