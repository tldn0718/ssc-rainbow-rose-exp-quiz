import type { Exhibit, Question } from "./types";

export const exhibits: Exhibit[] = [
  {
    id: "B26",
    code: "B26",
    title: "빛으로 표정을 바꿀 수 있을까?",
    photo: "/assets/exhibit-B26.webp",
  },
  {
    id: "B41",
    code: "B41",
    title: "빛을 쪼개고 합칠 수 있을까?",
    photo: "/assets/exhibit-B41.webp",
  },
  {
    id: "B42",
    code: "B42",
    title: "우리가 보는 색을 믿을 수 있을까?",
    photo: "/assets/exhibit-B42.webp",
  },
  {
    id: "B47",
    code: "B47",
    title: "열린 창가에서 편지를 읽는 여인",
    photo: "/assets/exhibit-B47.webp",
  },
  {
    id: "B12",
    code: "B12",
    title: '세상을 관찰하는 또 다른 방법 "적외선"',
    photo: "/assets/exhibit-B12.webp",
  },
];

export const questions: Question[] = [
  {
    id: "q1",
    exhibitId: "B26",
    type: "multiple",
    question:
      "전시물을 사용해보았을 때, 같은 얼굴이 다르게 보이는 주된 이유는 무엇일까요?",
    choices: [
      "얼굴 근육이 계속 변하기 때문에",
      "빛과 그림자, 환경의 차이 때문에",
      "거울의 왜곡 때문에",
    ],
    answerIndex: 1,
    explanation:
      "빛의 방향과 세기, 주변 환경에 따라 같은 얼굴도 다른 표정처럼 보일 수 있어요.",
  },
  {
    id: "q2",
    exhibitId: "B26",
    type: "short",
    question:
      "주변의 조명을 조정해서 생기는 그림자로 다양하게 연출하는 예술이 무엇일까요?",
    answers: ["그림자 예술", "그림자예술", "섀도우 아트", "쉐도우 아트"],
    explanation:
      "조명을 조정해 그림자만으로 형태를 만드는 예술을 '그림자 예술(Shadow Art)'이라고 해요.",
  },
  {
    id: "q3",
    exhibitId: "B41",
    type: "short",
    question: "프리즘을 통과한 빛이 여러색으로 나뉘는 현상을 무엇이라고 할까요?",
    image: "/assets/q3-prism.webp",
    answers: ["분광", "빛의 분산", "분산", "스펙트럼"],
    explanation:
      "빛이 프리즘을 지나며 색깔별로 나뉘는 현상은 '분광(빛의 분산)'이에요.",
  },
  {
    id: "q4",
    exhibitId: "B41",
    type: "multiple",
    question:
      "이중프리즘 실험을 통해 빛과 색에 대한 기존의 관념을 크게 바꾼 과학자는 누구일까요?",
    choices: ["갈릴레오 갈릴레이", "알베르트 아인슈타인", "아이작 뉴턴"],
    answerIndex: 2,
    explanation:
      "아이작 뉴턴은 이중프리즘 실험으로 백색광이 여러 색의 빛으로 이루어져 있음을 증명했어요.",
  },
  {
    id: "q5",
    exhibitId: "B42",
    type: "ox",
    question:
      "빨간색 사과에 백색광을 비추면 빨간색의 빛이 반사되어 우리 눈에 들어온다.",
    answer: "O",
    explanation:
      "사과는 빨간 빛만 반사하고 나머지 색은 흡수해요. 그래서 우리 눈에는 빨갛게 보이는 거예요.",
  },
  {
    id: "q6",
    exhibitId: "B42",
    type: "multiple",
    question: "그림 속 인물의 머리는 무슨 색일까요?",
    image: "/assets/q6-painting.webp",
    choices: ["노랑색", "초록색", "파란색"],
    answerIndex: 0,
    explanation:
      "조명을 바꾸면 같은 그림이라도 머리카락 색이 달라 보여요. 우리가 보는 색은 빛에 따라 달라집니다.",
  },
  {
    id: "q7",
    exhibitId: "B47",
    type: "short",
    question:
      "전시물 속 <열린 창가에서 편지를 읽는 여인> 작품에서 소장자가 덧칠하여 가렸던 그림은 무엇일까요?",
    image: "/assets/q7-vermeer.webp",
    answers: ["큐피드", "큐피드 그림", "큐피드상"],
    explanation:
      "벽에 걸린 큐피드 그림이 덧칠로 가려져 있었지만, 복원 작업으로 다시 모습을 드러냈어요.",
  },
  {
    id: "q8",
    exhibitId: "B47",
    type: "multiple",
    question:
      "<열린 창가에서 편지를 읽는 여인> 작품 속 숨겨진 그림은 어떤 빛을 이용해 알아냈을까요?",
    image: "/assets/q7-vermeer.webp",
    choices: ["자외선", "X선", "적외선"],
    answerIndex: 1,
    explanation: "X선 촬영으로 덧칠 아래 숨어 있던 큐피드 그림이 발견되었어요.",
  },
  {
    id: "q9",
    exhibitId: "B12",
    type: "ox",
    question: "적외선을 발견한 과학자는 윌리엄 허셜이다.",
    answer: "O",
    explanation:
      "1800년 윌리엄 허셜은 빨간색 빛 너머의 보이지 않는 빛, 적외선을 발견했어요.",
  },
  {
    id: "q10",
    exhibitId: "B12",
    type: "short",
    question:
      "다음 세 가지 판 (아크릴, 유리거울, 구리 판)에 손바닥을 찍은 후 적외선 카메라 화면을 확인해보세요. 손자국이 보이지 않는 판은 무엇일까요?",
    image: "/assets/q10-plates.webp",
    answers: ["구리", "구리판", "구리 판"],
    explanation:
      "구리는 열전도율이 매우 높은 금속이라 손이 닿은 순간 생긴 열이 빠르게 주변으로 퍼집니다. 그 결과 표면의 온도 차이가 금방 사라져 적외선 카메라로도 손자국이 잘 남지 않습니다.",
  },
];
