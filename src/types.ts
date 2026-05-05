export type Exhibit = {
  id: string;
  code: string;
  title: string;
  photo?: string;
};

type QuestionBase = {
  id: string;
  exhibitId: string;
  question: string;
  image?: string;
  explanation?: string;
};

export type MultipleChoiceQuestion = QuestionBase & {
  type: "multiple";
  choices: string[];
  answerIndex: number;
};

export type OXQuestion = QuestionBase & {
  type: "ox";
  answer: "O" | "X";
};

export type ShortAnswerQuestion = QuestionBase & {
  type: "short";
  answers: string[];
};

export type Question =
  | MultipleChoiceQuestion
  | OXQuestion
  | ShortAnswerQuestion;

export type QuizMeta = {
  title: string;
  subtitle: string;
  startButton: string;
  emergencyTitle: string;
  emergencyBody: string;
  emergencyYes: string;
  emergencyNo: string;
  emergencySuccessBody: string;
  emergencySuccessNotice: string;
  exhibitionIntroTitle: string;
  exhibitionIntroBody: string;
  exhibitsOverviewTitle: string;
  moveToFirstTitle: string;
  moveToNextTitle: string;
  moveToFirstBody: string;
  moveToNextBody: string;
  moveToFooter: string;
  moveToFirstExtra: string;
  solveQuiz: string;
  showResult: string;
  next: string;
  startQuizButton: string;
  clearTitle: string;
  clearBody: string;
  clearFooter: string;
  questionPrefix: string;
  trueLabel: string;
  falseLabel: string;
  inputPlaceholder: string;
  answerLabel: string;
  correct: string;
  wrong: string;
  explanationTitle: string;
};

export type QuizData = {
  meta: QuizMeta;
  exhibits: Exhibit[];
  questions: Question[];
};
