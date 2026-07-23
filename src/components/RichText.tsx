import type { ReactNode } from "react";

/**
 * 멘트 본문용 경량 마크업 렌더러
 *  **텍스트**  굵게 + 글자 확대
 *  *텍스트*    굵게
 *  ==텍스트==  노란 형광펜
 *  %%텍스트%%  분홍 형광펜
 *  __텍스트__  주황 물결 밑줄
 *  ~~텍스트~~  붉은 물결 밑줄
 */
type Rule = {
  re: RegExp;
  wrap: (children: ReactNode, key: string) => ReactNode;
};

const RULES: Rule[] = [
  {
    re: /==([^=]+)==/,
    wrap: (c, k) => (
      <mark key={k} className="rich-hl rich-hl-yellow">
        {c}
      </mark>
    ),
  },
  {
    re: /%%([^%]+)%%/,
    wrap: (c, k) => (
      <mark key={k} className="rich-hl rich-hl-pink">
        {c}
      </mark>
    ),
  },
  {
    re: /__([^_]+)__/,
    wrap: (c, k) => (
      <span key={k} className="rich-wavy rich-wavy-orange">
        {c}
      </span>
    ),
  },
  {
    re: /~~([^~]+)~~/,
    wrap: (c, k) => (
      <span key={k} className="rich-wavy rich-wavy-red">
        {c}
      </span>
    ),
  },
  {
    re: /\*\*([^*]+)\*\*/,
    wrap: (c, k) => (
      <strong key={k} className="rich-big">
        {c}
      </strong>
    ),
  },
  {
    re: /\*([^*]+)\*/,
    wrap: (c, k) => <strong key={k}>{c}</strong>,
  },
];

function parse(text: string, keyBase: string): ReactNode[] {
  let best: { rule: Rule; m: RegExpExecArray } | null = null;
  for (const rule of RULES) {
    const m = rule.re.exec(text);
    if (m && (best === null || m.index < best.m.index)) best = { rule, m };
  }
  if (!best) return text ? [text] : [];

  const { rule, m } = best;
  const before = text.slice(0, m.index);
  const after = text.slice(m.index + m[0].length);
  return [
    ...(before ? [before] : []),
    rule.wrap(parse(m[1], `${keyBase}i`), `${keyBase}m`),
    ...parse(after, `${keyBase}n`),
  ];
}

export function RichText({ text }: { text: string }) {
  return <>{parse(text, "r")}</>;
}
