import { useLayoutEffect, useRef, useState } from "react";
import type { Exhibit } from "../types";
import { exhibits } from "../data";
import { PinkButton } from "./PinkButton";
import { HallMap } from "./HallMap";

type Props = {
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

export function ExhibitsOverviewScreen({ onNext }: Props) {
  const byCode = Object.fromEntries(exhibits.map((e) => [e.code, e]));
  const topRow = TOP_CODES.map((c) => byCode[c]).filter(Boolean);

  const layerRef = useRef<HTMLDivElement>(null);
  const photoRefs = useRef<Record<string, HTMLDivElement | null>>({});
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
        const photo = photoRefs.current[code];
        const pin = layer.querySelector(`[data-pin-code="${code}"]`);
        if (!photo || !pin) continue;
        const cb = photo.getBoundingClientRect();
        const pb = pin.getBoundingClientRect();
        const isTop = (TOP_CODES as readonly string[]).includes(code);
        const cx = pb.left + pb.width / 2 - lb.left;
        const cy = pb.top + pb.height / 2 - lb.top;
        const tx = cb.left + cb.width / 2 - lb.left;
        const ty = (isTop ? cb.bottom : cb.top) - lb.top;
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
    <div className="relative h-[100dvh] flex flex-col overflow-hidden bg-sky-1">
      <div className="relative px-4 pt-3 pb-3 flex-1 flex flex-col">
        <h2
          className="font-display text-[26px] text-white text-center leading-tight"
          style={{
            fontFamily: "'Black Han Sans','Jua',sans-serif",
            color: "#fff",
            WebkitTextStroke: "1.2px #1f2937",
            paintOrder: "stroke fill",
            textShadow: "0 3px 0 #1f2937",
          }}
        >
          해당 전시물 소개
        </h2>

        <div ref={layerRef} className="relative flex-1 flex flex-col justify-center gap-3 min-h-0">
          {/* 위쪽 3개 (B42, B47, B12) */}
          <div className="grid grid-cols-3 gap-2 relative z-10">
            {topRow.map((ex) => (
              <ExhibitItem
                key={ex.id}
                exhibit={ex}
                labelPosition="top"
                photoRef={(el) => {
                  photoRefs.current[ex.code] = el;
                }}
              />
            ))}
          </div>

          {/* 지도 */}
          <div className="relative my-8">
            <HallMap exhibits={exhibits} />
          </div>

          {/* 아래쪽: B41 사진 | 라벨 2개 | B26 사진 */}
          <div className="grid grid-cols-[1fr_1.05fr_1fr] gap-2 items-center relative z-10">
            <div
              ref={(el) => {
                photoRefs.current["B41"] = el;
              }}
              className="aspect-square rounded-lg overflow-hidden bg-slate-700 shadow-md"
            >
              {byCode["B41"]?.photo && (
                <img
                  src={byCode["B41"].photo}
                  alt={byCode["B41"].title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="flex flex-col gap-1.5 min-w-0">
              <BareLabel exhibit={byCode["B41"]} />
              <BareLabel exhibit={byCode["B26"]} />
            </div>

            <div
              ref={(el) => {
                photoRefs.current["B26"] = el;
              }}
              className="aspect-square rounded-lg overflow-hidden bg-slate-700 shadow-md"
            >
              {byCode["B26"]?.photo && (
                <img
                  src={byCode["B26"].photo}
                  alt={byCode["B26"].title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>

          {/* 화살표 SVG 레이어 */}
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
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#F39320" />
              </marker>
            </defs>
            {arrows.map((a) => (
              <line
                key={a.code}
                x1={a.fromX}
                y1={a.fromY}
                x2={a.toX}
                y2={a.toY}
                stroke="#F39320"
                strokeWidth="2.5"
                strokeLinecap="round"
                markerEnd="url(#arrow-head)"
              />
            ))}
          </svg>
        </div>

        <div className="flex justify-center pt-3">
          <PinkButton onClick={onNext} size="sm">
            시작하기
          </PinkButton>
        </div>
      </div>
    </div>
  );
}

function ExhibitItem({
  exhibit,
  photoRef,
}: {
  exhibit: Exhibit;
  labelPosition: "top" | "bottom";
  photoRef?: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div className="flex flex-col items-stretch gap-1">
      <BareLabel exhibit={exhibit} />
      <div
        ref={photoRef}
        className="w-full aspect-square rounded-lg overflow-hidden bg-slate-700 shadow-md"
      >
        {exhibit.photo && (
          <img
            src={exhibit.photo}
            alt={exhibit.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
}

function BareLabel({ exhibit }: { exhibit?: Exhibit }) {
  if (!exhibit) return null;
  return (
    <div className="text-slate-800 leading-[1.2] text-[10.5px] rounded-md bg-white/55 backdrop-blur-sm px-1.5 py-1">
      <div className="flex items-center gap-1 font-bold">
        <img
          src="/assets/pin-yellow.webp"
          alt=""
          aria-hidden
          className="w-2.5 h-auto"
        />
        <span>{exhibit.code}</span>
      </div>
      <div className="mt-0.5 line-clamp-2">{exhibit.title}</div>
    </div>
  );
}
