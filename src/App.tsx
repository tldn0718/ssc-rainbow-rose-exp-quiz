import { useEffect, useMemo, useState } from "react";
import { destination, exhibits, questions, transports } from "./data";
import { StartScreen } from "./components/StartScreen";
import { InvitationScreen } from "./components/InvitationScreen";
import { RouteScreen } from "./components/RouteScreen";
import { GuideScreen } from "./components/GuideScreen";
import { MoveToScreen } from "./components/MoveToScreen";
import { QuestionScreen } from "./components/QuestionScreen";
import { TransportCompleteScreen } from "./components/TransportCompleteScreen";
import { ClearScreen } from "./components/ClearScreen";
import { DestinationScreen } from "./components/DestinationScreen";
import { recordCompletion } from "./viewCount";

type Step =
  | { kind: "start" }
  | { kind: "invitation" }
  | { kind: "route" }
  | { kind: "guide" }
  | { kind: "moveTo"; transportIndex: number }
  | { kind: "question"; questionIndex: number }
  | { kind: "transportComplete"; transportIndex: number }
  | { kind: "clear" }
  | { kind: "destination" };

function buildFlow(): Step[] {
  const flow: Step[] = [
    { kind: "start" },
    { kind: "invitation" },
    // 수정사항(2026-07): 이용안내(경로 보기) → 이동 경로(퀴즈 시작) 순서로 진행
    { kind: "guide" },
    { kind: "route" },
  ];
  transports.forEach((t, ti) => {
    flow.push({ kind: "moveTo", transportIndex: ti });
    questions.forEach((q, qi) => {
      if (q.exhibitId === t.exhibitId)
        flow.push({ kind: "question", questionIndex: qi });
    });
    flow.push({ kind: "transportComplete", transportIndex: ti });
  });
  flow.push({ kind: "clear" });
  flow.push({ kind: "destination" });
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

  useEffect(() => {
    if (step.kind === "clear") recordCompletion();
  }, [step.kind]);

  const goNext = () => setStepIndex((i) => Math.min(i + 1, flow.length - 1));

  let progressCurrent = 0;
  if (step.kind === "question") {
    progressCurrent = step.questionIndex + 1;
  }

  return (
    <div className="mx-auto max-w-md min-h-[100dvh] overflow-x-hidden">
      {step.kind === "start" && <StartScreen onStart={goNext} />}
      {step.kind === "invitation" && <InvitationScreen onNext={goNext} />}
      {step.kind === "route" && <RouteScreen onNext={goNext} />}
      {step.kind === "guide" && <GuideScreen onNext={goNext} />}
      {step.kind === "moveTo" &&
        (() => {
          const t = transports[step.transportIndex];
          const exhibit = exhibits.find((e) => e.id === t.exhibitId)!;
          return <MoveToScreen transport={t} exhibit={exhibit} onNext={goNext} />;
        })()}
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
      {step.kind === "transportComplete" && (
        <TransportCompleteScreen
          transport={transports[step.transportIndex]}
          onNext={goNext}
        />
      )}
      {step.kind === "clear" && <ClearScreen onNext={goNext} />}
      {step.kind === "destination" && <DestinationScreen exhibit={destination} />}
    </div>
  );
}
