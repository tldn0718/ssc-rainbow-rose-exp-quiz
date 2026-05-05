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
