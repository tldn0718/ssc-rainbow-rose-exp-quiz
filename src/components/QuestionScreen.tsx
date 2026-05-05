import { useMemo, useState } from "react";
import type { Exhibit, Question, QuizMeta } from "../types";
import { ProgressBar } from "./ProgressBar";
import { PinkButton } from "./PinkButton";

type Props = {
  meta: QuizMeta;
  question: Question;
  exhibit: Exhibit;
  questionNumber: number;
  totalQuestions: number;
  progressCurrent: number;
  progressTotal: number;
  onNext: () => void;
};

function normalize(input: string) {
  return input.trim().toLowerCase().replace(/\s+/g, "");
}

export function QuestionScreen({
  meta,
  question,
  exhibit,
  questionNumber,
  totalQuestions,
  progressCurrent,
  progressTotal,
  onNext,
}: Props) {
  const [choiceIndex, setChoiceIndex] = useState<number | null>(null);
  const [oxAnswer, setOxAnswer] = useState<"O" | "X" | null>(null);
  const [shortInput, setShortInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isLast = questionNumber === totalQuestions;

  const isCorrect = useMemo(() => {
    if (!submitted) return false;
    switch (question.type) {
      case "multiple":
        return choiceIndex === question.answerIndex;
      case "ox":
        return oxAnswer === question.answer;
      case "short": {
        const n = normalize(shortInput);
        return question.answers.some((a) => normalize(a) === n);
      }
    }
  }, [submitted, question, choiceIndex, oxAnswer, shortInput]);

  const canSubmit = useMemo(() => {
    switch (question.type) {
      case "multiple":
        return choiceIndex !== null;
      case "ox":
        return oxAnswer !== null;
      case "short":
        return shortInput.trim().length > 0;
    }
  }, [question, choiceIndex, oxAnswer, shortInput]);

  const handleSubmit = () => {
    if (!canSubmit) return;
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-[100dvh] flex flex-col bg-white overflow-x-hidden">
      <header className="px-5 pt-5">
        <ProgressBar current={progressCurrent} total={progressTotal} />
      </header>

      <main className="px-5 pt-5 flex-1 flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <h2
            className="font-display text-4xl text-slate-900 shrink-0"
            style={{ fontFamily: "'Black Han Sans','Jua',sans-serif" }}
          >
            {meta.questionPrefix}
            {questionNumber}.
          </h2>
          <div className="flex-1 mt-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-3/60 px-3 py-1.5 text-xs font-bold text-slate-700">
              <span className="text-pinkBtn">📍</span>
              <span className="text-pinkBtn font-bold">{exhibit.code}</span>
              <span className="text-slate-700">{exhibit.title}</span>
            </div>
          </div>
        </div>

        <h3
          className="font-display text-2xl text-slate-900 leading-snug"
          style={{ fontFamily: "'Black Han Sans','Jua',sans-serif" }}
        >
          {question.question}
        </h3>

        <div className="flex flex-col gap-3">
          {question.type === "multiple" && (
            <div
              className={
                question.choices.length === 3 &&
                question.choices.every((c) => c.length <= 5)
                  ? "grid grid-cols-3 gap-3"
                  : "flex flex-col gap-3"
              }
            >
              {question.choices.map((choice, i) => {
                const selected = choiceIndex === i;
                const isAnswer = question.answerIndex === i;
                const showCorrect = submitted && isAnswer;
                const showWrong = submitted && selected && !isAnswer;
                const compact =
                  question.choices.length === 3 &&
                  question.choices.every((c) => c.length <= 5);
                return (
                  <button
                    key={i}
                    type="button"
                    disabled={submitted}
                    onClick={() => setChoiceIndex(i)}
                    className={[
                      "rounded-full border-[2.5px] transition px-4 py-4 font-display text-lg",
                      compact
                        ? "flex flex-col items-center justify-center"
                        : "flex items-center gap-3 text-left",
                      submitted
                        ? showCorrect
                          ? "bg-green-50 border-green-500 text-green-700"
                          : showWrong
                            ? "bg-red-50 border-red-500 text-red-700"
                            : "bg-rosePink/30 border-roseAccent/60 text-slate-500"
                        : selected
                          ? "bg-pinkBtn border-pinkBtn-dark text-white shadow-pinkBtn"
                          : "bg-rosePink/40 border-roseAccent text-slate-800 hover:bg-rosePink/60 active:scale-[0.98]",
                    ].join(" ")}
                    style={{
                      fontFamily: "'Black Han Sans','Jua',sans-serif",
                    }}
                  >
                    <span
                      className={[
                        "shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full text-base font-bold",
                        submitted
                          ? showCorrect
                            ? "bg-green-500 text-white"
                            : showWrong
                              ? "bg-red-500 text-white"
                              : "bg-rosePink text-roseAccent"
                          : selected
                            ? "bg-white text-pinkBtn"
                            : "bg-rosePink text-roseAccent",
                      ].join(" ")}
                    >
                      {i + 1}
                    </span>
                    <span className={compact ? "mt-1 text-base" : "flex-1"}>
                      {choice}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {question.type === "ox" && (
            <div className="grid grid-cols-2 gap-4">
              {(["O", "X"] as const).map((v) => {
                const selected = oxAnswer === v;
                const isAnswer = question.answer === v;
                const showCorrect = submitted && isAnswer;
                const showWrong = submitted && selected && !isAnswer;
                const label = v === "O" ? meta.trueLabel : meta.falseLabel;
                return (
                  <button
                    key={v}
                    type="button"
                    disabled={submitted}
                    onClick={() => setOxAnswer(v)}
                    className={[
                      "aspect-square rounded-3xl border-[2.5px] flex flex-col items-center justify-center gap-2 transition",
                      submitted
                        ? showCorrect
                          ? "bg-green-50 border-green-500 text-green-600"
                          : showWrong
                            ? "bg-red-50 border-red-500 text-red-500"
                            : "bg-rosePink/20 border-roseAccent/40 text-roseAccent/70"
                        : selected
                          ? "bg-pinkBtn border-pinkBtn-dark text-white shadow-pinkBtn"
                          : "bg-white border-roseAccent text-roseAccent active:scale-[0.98]",
                    ].join(" ")}
                  >
                    <span
                      className="font-display text-7xl leading-none"
                      style={{ fontFamily: "'Black Han Sans','Jua',sans-serif" }}
                    >
                      {v === "O" ? "O" : "X"}
                    </span>
                    <span className="text-sm font-bold">{label}</span>
                  </button>
                );
              })}
            </div>
          )}

          {question.type === "short" && (
            <div>
              <input
                type="text"
                value={shortInput}
                onChange={(e) => setShortInput(e.target.value)}
                disabled={submitted}
                placeholder={meta.inputPlaceholder}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && canSubmit && !submitted)
                    handleSubmit();
                }}
                className={[
                  "w-full rounded-3xl px-6 py-5 text-lg font-bold border-[2.5px] outline-none transition bg-rosePink/40",
                  submitted
                    ? isCorrect
                      ? "border-green-500 text-green-700 bg-green-50"
                      : "border-red-500 text-red-700 bg-red-50"
                    : "border-roseAccent text-slate-800 focus:border-pinkBtn",
                ].join(" ")}
              />
              {submitted && !isCorrect && (
                <div className="mt-3 text-sm text-slate-600">
                  {meta.answerLabel}:{" "}
                  <span className="font-bold text-slate-900">
                    {question.answers[0]}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {submitted && question.explanation && (
          <div
            className={[
              "rounded-bubble p-5 mt-2 animate-fade-up",
              isCorrect
                ? "bg-green-50 border border-green-200"
                : "bg-red-50 border border-red-200",
            ].join(" ")}
          >
            <div
              className={[
                "font-display text-xl mb-2",
                isCorrect ? "text-green-600" : "text-red-500",
              ].join(" ")}
            >
              {isCorrect ? `🎉 ${meta.correct}` : `💭 ${meta.wrong}`}
            </div>
            <div className="text-sm font-bold text-slate-700 mb-1.5">
              {meta.explanationTitle}
            </div>
            <p className="text-slate-800 leading-relaxed whitespace-pre-line">
              {question.explanation}
            </p>
          </div>
        )}
      </main>

      <footer className="relative pt-8 pb-10 mt-4">
        <div className="absolute inset-x-0 top-0 wave-divider" />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, #5DC3EE 0%, #98DCF2 25%, transparent 90%)",
          }}
        />
        <div className="absolute inset-0 -z-10 opacity-70">
          {/* TODO[asset]: 하단 무지개 일러스트 */}
          <div
            className="absolute left-1/2 -translate-x-1/2 -bottom-32"
            style={{ width: "180%", height: "300px" }}
          >
            <div
              className="absolute inset-0 rounded-[50%]"
              style={{
                background: `radial-gradient(ellipse 60% 50% at 50% 100%,
                  transparent 0%, transparent 38%,
                  rgba(255,143,163,0.85) 39%,
                  rgba(255,179,107,0.85) 44%,
                  rgba(255,224,102,0.85) 49%,
                  rgba(181,228,140,0.85) 54%,
                  rgba(128,207,255,0.85) 59%,
                  transparent 68%)`,
                filter: "blur(2px)",
              }}
            />
          </div>
        </div>

        <div className="relative flex justify-center">
          {!submitted ? (
            <PinkButton onClick={handleSubmit} disabled={!canSubmit}>
              {meta.showResult}
            </PinkButton>
          ) : (
            <PinkButton onClick={onNext}>
              {isLast ? meta.next : meta.next}
            </PinkButton>
          )}
        </div>
      </footer>
    </div>
  );
}
