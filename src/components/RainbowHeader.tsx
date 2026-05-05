type Props = {
  height?: string;
};

export function RainbowHeader({ height = "200px" }: Props) {
  return (
    <div
      className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden"
      style={{ height }}
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-b from-sky-1 via-sky-2 to-sky-3" />
      <img
        src="/assets/rainbow.png"
        alt=""
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[140%] max-w-none"
      />
    </div>
  );
}
