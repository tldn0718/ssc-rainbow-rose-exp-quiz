export type Exhibit = {
  id: string;
  code: string;
  title: string;
  photo?: string;
  /** 전시실 배치도 이미지 (위치 확인 팝업용) */
  layoutMap?: string;
};

/** 교통수단 구간 (이동 안내 + 퀴즈 완료 팝업) */
export type Transport = {
  id: string;
  exhibitId: string;
  /** 예: "첫번째 교통수단" */
  ordinal: string;
  /** 예: "자전거" */
  vehicle: string;
  /** 이동 안내 본문 */
  intro: string;
  /** 퀴즈 완료(Great job!) 팝업 본문 */
  complete: string;
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

/** 숫자 입력형 — min 이상이면 정답 처리 */
export type NumericQuestion = QuestionBase & {
  type: "numeric";
  min: number;
};

export type Question =
  | MultipleChoiceQuestion
  | OXQuestion
  | ShortAnswerQuestion
  | NumericQuestion;
