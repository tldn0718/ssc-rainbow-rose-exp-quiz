import { useLayoutEffect, useRef, useState } from "react";
import type { Exhibit, QuizMeta } from "../types";
import { Sparkles } from "./Sparkles";
import { PinkButton } from "./PinkButton";
import { HallMap } from "./HallMap";

type Props = {
  meta: QuizMeta;
  exhibits: Exhibit[];
  onNext: () => void;
};

const TOP_CODES = ["B42", "B47", "B12"] as const;
const BOTTOM_CODES = ["B41", "B26"] as const;
const ALL_CODES = [...TOP_CODES, ...BOTTOM_CODES] as const;

type Arrow = {
  code: string;
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
};

export function ExhibitsOverviewScreen({ meta, exhibits, onNext }: Props) {
  const byCode = Object.fromEntries(exhibits.map((e) => [e.code, e]));
  const topRow = TOP_CODES.map((c) => byCode[c]).filter(Boolean);
  const bottomRow = BOTTOM_CODES.map((c) => byCode[c]).filter(Boolean);

  const layerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [arrows, setArrows] = useState<Arrow[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    const measure = () => {
      const lb = layer.getBoundingClientRect();
      setSize({ w: lb.width, h: lb.height });
      const next: Arrow[] = [];
      for (const code of ALL_CODES) {
        const card = cardRefs.current[code];
        const pin = layer.querySelector(`[data-pin-code="${code}"]`);
        if (!card || !pin) continue;
        const cb = card.getBoundingClientRect();
        const pb = pin.getBoundingClientRect();
        const isTop = (TOP_CODES as readonly string[]).includes(code);
        // 핀(빨간 원) 중심
        const cx = pb.left + pb.width / 2 - lb.left;
        const cy = pb.top + pb.height / 2 - lb.top;
        // 카드의 화살표 도착점
        const tx = cb.left + cb.width / 2 - lb.left;
        const ty = (isTop ? cb.bottom : cb.top) - lb.top;
        // 화살표 시작점을 원 중심에서 카드 방향으로 (반지름 + 여백)만큼 offset
        // → 화살표가 원 둘레에서 출발하므로 원 안쪽 숫자를 가리지 않음
        const dx = tx - cx;
        const dy = ty - cy;
        const len = Math.hypot(dx, dy) || 1;
        const radius = pb.width / 2 + 3;
        const fromX = cx + (dx / len) * radius;
        const fromY = cy + (dy / len) * radius;
        next.push({ code, fromX, fromY, toX: tx, toY: ty });
      }
      setArrows(next);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(layer);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div className="relative min-h-[100dvh] flex flex-col overflow-x-hidden bg-sky-1">
      <Sparkles />

      <div className="relative px-4 pt-8 pb-6 flex-1 flex flex-col">
        <h2
          className="font-display text-3xl text-white text-center"
          style={{
            fontFamily: "'Black Han Sans','Jua',sans-serif",
            color: "#fff",
            WebkitTextStroke: "1px #1f2937",
            paintOrder: "stroke fill",
            textShadow: "0 3px 0 #1f2937",
          }}
        >
          {meta.exhibitsOverviewTitle}
        </h2>

        <div ref={layerRef} className="relative mt-5 flex-1 flex flex-col">
          <div className="grid grid-cols-3 gap-2 relative z-10">
            {topRow.map((ex, i) => (
              <ExhibitCard
                key={ex.id}
                exhibit={ex}
                tilt={i === 0 ? -3 : i === 2 ? 3 : 0}
                cardRef={(el) => {
                  cardRefs.current[ex.code] = el;
                }}
              />
            ))}
          </div>

          <div className="mt-8 relative z-0">
            <HallMap exhibits={exhibits} />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 relative z-10">
            {bottomRow.map((ex, i) => (
              <ExhibitCard
                key={ex.id}
                exhibit={ex}
                tilt={i === 0 ? -3 : 3}
                cardRef={(el) => {
                  cardRefs.current[ex.code] = el;
                }}
              />
            ))}
          </div>

          {/* 카드 ↔ 핀 화살표 SVG overlay (지도 위 / 카드 아래) */}
          <svg
            className="pointer-events-none absolute inset-0 z-[5]"
            width={size.w}
            height={size.h}
            viewBox={`0 0 ${size.w} ${size.h}`}
            aria-hidden
          >
            <defs>
              <marker
                id="arrow-head"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#FFD84D" />
              </marker>
            </defs>
            {arrows.map((a) => (
              <line
                key={a.code}
                x1={a.fromX}
                y1={a.fromY}
                x2={a.toX}
                y2={a.toY}
                stroke="#FFD84D"
                strokeWidth="3"
                strokeLinecap="round"
                markerEnd="url(#arrow-head)"
              />
            ))}
          </svg>
        </div>

        <div className="flex justify-center pt-6">
          <PinkButton onClick={onNext}>{meta.startQuizButton}</PinkButton>
        </div>
      </div>
    </div>
  );
}

function ExhibitCard({
  exhibit,
  tilt = 0,
  cardRef,
}: {
  exhibit: Exhibit;
  tilt?: number;
  cardRef?: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div
      ref={cardRef}
      className="flex flex-col items-center"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="w-full aspect-square rounded-lg overflow-hidden bg-slate-700 shadow-md">
        {exhibit.photo && (
          <img
            src={exhibit.photo}
            alt={exhibit.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="mt-1 w-full bg-white rounded-md border border-slate-200 px-1.5 py-1 text-[10px] leading-tight text-center shadow-sm">
        <div className="flex items-center justify-center gap-0.5">
          <img
            src="/assets/pin.webp"
            alt=""
            aria-hidden
            className="w-2 h-auto"
          />
          <span className="font-bold text-slate-800">{exhibit.code}</span>
        </div>
        <div className="text-slate-700 line-clamp-2 mt-0.5">
          {exhibit.title}
        </div>
      </div>
    </div>
  );
}
