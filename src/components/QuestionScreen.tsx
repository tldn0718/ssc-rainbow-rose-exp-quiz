import { useMemo, useState } from "react";
import type { Exhibit, Question } from "../types";
import { ProgressBar } from "./ProgressBar";
import { SkyOvalButton } from "./SkyOvalButton";
import { ExhibitLocation } from "./ExhibitLocation";

type Props = {
  question: Question;
  exhibit: Exhibit;
  questionNumber: number;
  progressCurrent: number;
  progressTotal: number;
  onNext: () => void;
};

function normalize(input: string) {
  return input.trim().toLowerCase().replace(/\s+/g, "");
}

function parseNumber(input: string): number | null {
  const m = input.replace(/,/g, "").match(/-?\d+(\.\d+)?/);
  return m ? parseFloat(m[0]) : null;
}

export function QuestionScreen({
  question,
  exhibit,
  questionNumber,
  progressCurrent,
  progressTotal,
  onNext,
}: Props) {
  const [choiceIndex, setChoiceIndex] = useState<number | null>(null);
  const [oxAnswer, setOxAnswer] = useState<"O" | "X" | null>(null);
  const [shortInput, setShortInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
      case "numeric": {
        const v = parseNumber(shortInput);
        return v !== null && (question.min === undefined || v >= question.min);
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
      case "numeric":
        return parseNumber(shortInput) !== null;
    }
  }, [question, choiceIndex, oxAnswer, shortInput]);

  const handleSubmit = () => {
    if (!canSubmit) return;
    setSubmitted(true);
  };

  const handleRetry = () => {
    setChoiceIndex(null);
    setOxAnswer(null);
    setShortInput("");
    setSubmitted(false);
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
            Q{questionNumber}.
          </h2>
          <div className="flex-1 mt-3 min-w-0">
            <ExhibitLocation exhibit={exhibit} />
          </div>
        </div>

        <h3
          className="font-display text-2xl text-slate-900 leading-snug whitespace-pre-line"
          style={{ fontFamily: "'Black Han Sans','Jua',sans-serif" }}
        >
          {question.question}
        </h3>

        {question.image && (
          <div className="flex justify-center">
            <img
              src={question.image}
              alt=""
              className="rounded-2xl max-h-56 object-contain"
            />
          </div>
        )}

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
                const showCorrect = submitted && isCorrect && isAnswer;
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
                const showCorrect = submitted && isCorrect && isAnswer;
                const showWrong = submitted && selected && !isAnswer;
                return (
                  <button
                    key={v}
                    type="button"
                    disabled={submitted}
                    onClick={() => setOxAnswer(v)}
                    className={[
                      "rounded-full border-[2.5px] py-4 flex items-center justify-center transition",
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
                      className="font-display text-5xl leading-none"
                      style={{ fontFamily: "'Black Han Sans','Jua',sans-serif" }}
                    >
                      {v}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {(question.type === "short" || question.type === "numeric") && (
            <div>
              <input
                type="text"
                inputMode={question.type === "numeric" ? "numeric" : "text"}
                value={shortInput}
                onChange={(e) => setShortInput(e.target.value)}
                disabled={submitted}
                placeholder={
                  question.type === "numeric"
                    ? "측정한 숫자를 입력하세요"
                    : "정답을 입력하세요"
                }
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
            </div>
          )}
        </div>

        {submitted && (
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
              {isCorrect ? "🎉 정답이에요!" : "💭 아쉬워요"}
            </div>
            {isCorrect ? (
              question.explanation && (
                <>
                  <div className="text-sm font-bold text-slate-700 mb-1.5">
                    🔎 해설
                  </div>
                  <p className="text-slate-800 leading-relaxed whitespace-pre-line">
                    {question.explanation}
                  </p>
                </>
              )
            ) : (
              <p className="text-slate-800 leading-relaxed font-bold whitespace-pre-line">
                {"앗, 조금 어려웠나요?\n전시물의 패널과 체험 요소를 다시 한 번 살펴보세요."}
              </p>
            )}
          </div>
        )}
      </main>

      <footer className="mt-2 pb-8 pt-6 flex justify-center">
        {!submitted ? (
          <SkyOvalButton onClick={handleSubmit} disabled={!canSubmit}>
            결과 보기
          </SkyOvalButton>
        ) : isCorrect ? (
          <SkyOvalButton onClick={onNext}>다음으로</SkyOvalButton>
        ) : (
          <SkyOvalButton onClick={handleRetry}>다시 풀기</SkyOvalButton>
        )}
      </footer>
    </div>
  );
}
