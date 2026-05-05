export function EmergencyHeader() {
  return (
    <div className="flex flex-col items-center gap-3">
      <h1
        className="text-center leading-[0.9] max-w-[260px]"
        style={{
          fontFamily: "'Bubblegum Sans', cursive",
          fontSize: "44px",
          color: "#ffffff",
          WebkitTextStroke: "2px #1f2937",
          paintOrder: "stroke fill",
          textShadow: "0 4px 0 #1f2937",
          letterSpacing: "0.01em",
        }}
      >
        The Secret Invitation
      </h1>

      <div
        className="rounded-full px-5 py-1"
        style={{
          background: "linear-gradient(180deg, #ff6da6 0%, #d63e80 100%)",
          border: "2.5px solid #1f2937",
          boxShadow: "0 3px 0 #1f2937",
        }}
      >
        <span
          className="font-display text-2xl"
          style={{
            fontFamily: "'Black Han Sans','Jua',sans-serif",
            background:
              "linear-gradient(180deg, #fff5b8 0%, #ffd1dc 50%, #c7e3ff 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextStroke: "0.5px #1f2937",
            letterSpacing: "0.05em",
          }}
        >
          무지개 장미 탐험대
        </span>
      </div>
    </div>
  );
}
