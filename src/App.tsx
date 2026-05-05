import { useEffect, useMemo, useState } from "react";
import type { Exhibit, Question, QuizData } from "./types";
import { StartScreen } from "./components/StartScreen";
import { EmergencyScreen } from "./components/EmergencyScreen";
import { EmergencySuccessScreen } from "./components/EmergencySuccessScreen";
import { ExhibitionIntroScreen } from "./components/ExhibitionIntroScreen";
import { ExhibitsOverviewScreen } from "./components/ExhibitsOverviewScreen";
import { MoveToScreen } from "./components/MoveToScreen";
import { QuestionScreen } from "./components/QuestionScreen";
import { ClearScreen } from "./components/ClearScreen";

type Step =
  | { kind: "start" }
  | { kind: "emergency" }
  | { kind: "emergencySuccess" }
  | { kind: "exhibitionIntro" }
  | { kind: "exhibitsOverview" }
  | { kind: "moveTo"; exhibitIndex: number }
  | { kind: "question"; questionIndex: number }
  | { kind: "clear" };

function buildFlow(exhibits: Exhibit[], questions: Question[]): Step[] {
  const flow: Step[] = [
    { kind: "start" },
    { kind: "emergency" },
    { kind: "emergencySuccess" },
    { kind: "exhibitionIntro" },
    { kind: "exhibitsOverview" },
  ];
  let lastExhibitId: string | null = null;
  questions.forEach((q, qi) => {
    if (q.exhibitId !== lastExhibitId) {
      const ei = exhibits.findIndex((e) => e.id === q.exhibitId);
      if (ei >= 0) flow.push({ kind: "moveTo", exhibitIndex: ei });
      lastExhibitId = q.exhibitId;
    }
    flow.push({ kind: "question", questionIndex: qi });
  });
  flow.push({ kind: "clear" });
  return flow;
}

export default function App() {
  const [data, setData] = useState<QuizData | null>(null);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    fetch("/questions.json")
      .then((r) => r.json())
      .then((json: QuizData) => setData(json))
      .catch((err) => console.error("Failed to load questions.json", err));
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [stepIndex]);

  const flow = useMemo(() => {
    if (!data) return [];
    return buildFlow(data.exhibits, data.questions);
  }, [data]);

  if (!data) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center text-slate-500">
        <span className="animate-bounce-soft text-4xl">🌹</span>
      </div>
    );
  }

  const step = flow[stepIndex];
  const totalQuestions = data.questions.length;

  const goNext = () => setStepIndex((i) => Math.min(i + 1, flow.length - 1));
  const goToStart = () => setStepIndex(0);

  const isFirstMoveTo = (exhibitIndex: number) => exhibitIndex === 0;

  let progressCurrent = 0;
  if (step.kind === "question") {
    progressCurrent = step.questionIndex + 1;
  }

  return (
    <div className="mx-auto max-w-md min-h-[100dvh] overflow-x-hidden">
      {step.kind === "start" && (
        <StartScreen meta={data.meta} onStart={goNext} />
      )}
      {step.kind === "emergency" && (
        <EmergencyScreen
          meta={data.meta}
          onYes={goNext}
          onNo={goToStart}
        />
      )}
      {step.kind === "emergencySuccess" && (
        <EmergencySuccessScreen meta={data.meta} onNext={goNext} />
      )}
      {step.kind === "exhibitionIntro" && (
        <ExhibitionIntroScreen meta={data.meta} onNext={goNext} />
      )}
      {step.kind === "exhibitsOverview" && (
        <ExhibitsOverviewScreen
          meta={data.meta}
          exhibits={data.exhibits}
          onNext={goNext}
        />
      )}
      {step.kind === "moveTo" && (
        <MoveToScreen
          meta={data.meta}
          exhibit={data.exhibits[step.exhibitIndex]}
          exhibits={data.exhibits}
          isFirst={isFirstMoveTo(step.exhibitIndex)}
          onNext={goNext}
        />
      )}
      {step.kind === "question" &&
        (() => {
          const q = data.questions[step.questionIndex];
          const exhibit = data.exhibits.find((e) => e.id === q.exhibitId)!;
          return (
            <QuestionScreen
              key={q.id}
              meta={data.meta}
              question={q}
              exhibit={exhibit}
              questionNumber={step.questionIndex + 1}
              progressCurrent={progressCurrent}
              progressTotal={totalQuestions}
              onNext={goNext}
            />
          );
        })()}
      {step.kind === "clear" && <ClearScreen meta={data.meta} />}
    </div>
  );
}
