import { useEffect, useMemo, useState } from "react";
import { exhibits, questions } from "./data";
import { StartScreen } from "./components/StartScreen";
import { EmergencyScreen } from "./components/EmergencyScreen";
import { ExhibitionIntroScreen } from "./components/ExhibitionIntroScreen";
import { ExhibitsOverviewScreen } from "./components/ExhibitsOverviewScreen";
import { MoveToScreen } from "./components/MoveToScreen";
import { QuestionScreen } from "./components/QuestionScreen";
import { ClearScreen } from "./components/ClearScreen";

type Step =
  | { kind: "start" }
  | { kind: "emergency" }
  | { kind: "exhibitionIntro" }
  | { kind: "exhibitsOverview" }
  | { kind: "moveTo"; exhibitIndex: number }
  | { kind: "question"; questionIndex: number }
  | { kind: "clear" };

function buildFlow(): Step[] {
  const flow: Step[] = [
    { kind: "start" },
    { kind: "emergency" },
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
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [stepIndex]);

  const flow = useMemo(() => buildFlow(), []);

  const step = flow[stepIndex];
  const totalQuestions = questions.length;

  const goNext = () => setStepIndex((i) => Math.min(i + 1, flow.length - 1));
  const goToStart = () => setStepIndex(0);

  const isFirstMoveTo = (exhibitIndex: number) => exhibitIndex === 0;
  const isLastMoveTo = (exhibitIndex: number) =>
    exhibitIndex === exhibits.length - 1;
  const previousExhibitCode = (exhibitIndex: number) =>
    exhibitIndex > 0 ? exhibits[exhibitIndex - 1].code : undefined;

  let progressCurrent = 0;
  if (step.kind === "question") {
    progressCurrent = step.questionIndex + 1;
  }

  return (
    <div className="mx-auto max-w-md min-h-[100dvh] overflow-x-hidden">
      {step.kind === "start" && <StartScreen onStart={goNext} />}
      {step.kind === "emergency" && (
        <EmergencyScreen onYes={goNext} onNo={goToStart} />
      )}
      {step.kind === "exhibitionIntro" && (
        <ExhibitionIntroScreen onNext={goNext} />
      )}
      {step.kind === "exhibitsOverview" && (
        <ExhibitsOverviewScreen onNext={goNext} />
      )}
      {step.kind === "moveTo" && (
        <MoveToScreen
          exhibit={exhibits[step.exhibitIndex]}
          isFirst={isFirstMoveTo(step.exhibitIndex)}
          isLast={isLastMoveTo(step.exhibitIndex)}
          previousExhibitCode={previousExhibitCode(step.exhibitIndex)}
          onNext={goNext}
        />
      )}
      {step.kind === "question" &&
        (() => {
          const q = questions[step.questionIndex];
          const exhibit = exhibits.find((e) => e.id === q.exhibitId)!;
          return (
            <QuestionScreen
              key={q.id}
              question={q}
              exhibit={exhibit}
              questionNumber={step.questionIndex + 1}
              progressCurrent={progressCurrent}
              progressTotal={totalQuestions}
              onNext={goNext}
            />
          );
        })()}
      {step.kind === "clear" && <ClearScreen />}
    </div>
  );
}
