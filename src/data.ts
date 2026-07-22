import type { Exhibit, Question, Transport } from "./types";

export const exhibits: Exhibit[] = [
  {
    id: "B20",
    code: "B20",
    title: "자전거는 왜 넘어지지 않을까?",
    photo: "/assets/exhibit-B20.webp",
    layoutMap: "/assets/map-B20.webp",
  },
  {
    id: "B19",
    code: "B19",
    title: "자동차의 속도는 어떻게 측정할까?",
    photo: "/assets/exhibit-B19.webp",
    layoutMap: "/assets/map-B19.webp",
  },
  {
    id: "B16",
    code: "B16",
    title: "교통카드에는 어떻게 정보가 담기고 전달될까?",
    photo: "/assets/exhibit-B16.webp",
    layoutMap: "/assets/map-B16.webp",
  },
  {
    id: "B22",
    code: "B22",
    title: "지하철은 어떻게 움직일까?",
    photo: "/assets/exhibit-B22.webp",
    layoutMap: "/assets/map-B22.webp",
  },
  {
    id: "B31",
    code: "B31",
    title: "멀미를 하는 이유는?",
    photo: "/assets/exhibit-B31.webp",
    layoutMap: "/assets/map-B31.webp",
  },
];

/** 마지막 목적지 — 관천대 */
export const destination: Exhibit = {
  id: "B28",
  code: "B28",
  title: "하늘에서 일어나는 현상을 어떻게 관찰하였을까?",
  photo: "/assets/exhibit-B28.webp",
  layoutMap: "/assets/map-B28.webp",
};

export const transports: Transport[] = [
  {
    id: "bicycle",
    exhibitId: "B20",
    ordinal: "첫번째 교통수단",
    vehicle: "자전거",
    intro: `여행의 첫 출발은 가볍게 자전거로 시작해 볼까?

가까운 곳을 둘러보기에는
자전거만큼 좋은 교통수단이 없지!

자전거 속 숨은 과학을 알아보고
다음 경로로 이동해 보자.`,
    complete: `자전거 속 균형의 비밀을 알아냈어! 🚲

자전거는 천천히 달릴 때보다
빠르게 달릴 때 더 안정적으로
균형을 잡을 수 있어.

이제 자전거를 탈 때 "넘어지면 어떡하지?"
걱정하지 말고,
바퀴의 회전과 함께 앞으로 나아가 보자!`,
  },
  {
    id: "shuttle",
    exhibitId: "B19",
    ordinal: "두번째 교통수단",
    vehicle: "블루미 셔틀버스",
    intro: `자전거 여행 성공! 🚲

그런데 다음 구간은 조금 더 멀리 있어.
그래서 블루미가 셔틀버스를 준비했지~! 🚌

블루미 셔틀버스는
다음 교통수단이 기다리는 곳까지
안전하게 데려다주는 특별한 버스야.
그럼, 여행을 이어가 볼까?`,
    complete: `차를 타고 가다가
빠르게 달리던 차량이 속도 단속 구간에서
갑자기 속도를 줄이는 모습을 본 적 있지?

"단속하는 사람은 어디서 보고 있는 걸까?"
하고 궁금했을 수도 있어!

사실 스피드건은 사람의 눈으로
속도를 재는 것이 아니라,
자동차에 반사되어 돌아오는 파장의 변화를
이용하는 '도플러 효과'로 속도를 측정해.

이제 도로에서 속도 단속 장비를 보게 된다면,
'아! 도플러 효과를 이용하는 거구나!'
하고 떠올려 보자! 🚓✨`,
  },
  {
    id: "bus-subway",
    exhibitId: "B16",
    ordinal: "세번째 교통수단",
    vehicle: "버스 / 지하철",
    intro: `블루미 셔틀버스는
정해진 구간까지만 이동할 수 있어.
이제부터는 우리가 일상에서 이용하는
대중교통을 만나볼 차례야!

버스와 지하철을 편리하게 이용하려면
꼭 필요한 것, 바로 교통카드! 💳

작은 카드 안에 정보가
어떻게 담기고 전달되는지 알아보자!`,
    complete: `"잔액이 부족합니다." 😥
버스나 지하철에서 이런 안내를 듣고
당황했던 적 있지?

선불 교통카드는
태그할 때 남은 잔액을 확인할 수 있어.
버스나 지하철 탈 때 한 번 확인하면
갑작스러운 잔액 부족을 예방할 수 있지~!

반대로 후불 교통카드는
잔액 대신 지금까지 이용한 금액이 표시되고,
나중에 한 번에 결제돼.

이제 교통카드를 태그할 때
화면에 어떤 정보가 표시되는지
한 번 살펴보자! 💳`,
  },
  {
    id: "subway",
    exhibitId: "B22",
    ordinal: "네번째 교통수단",
    vehicle: "지하철",
    intro: `도로를 달리는 버스는
교통량에 따라 이동 시간이 달라질 수 있어.

여기서부터는 교통량이 많은 구간이야.
블루미는 미리 이 구간을 예상해서
빠르고 편리한 지하철 코스를 준비했어! 🚇

이럴 땐 복잡한 도시를 빠르게 연결해 주는
지하철 속 과학을 만나러 가볼까?`,
    complete: `우리가 자주 타는 지하철!
그냥 움직이는 것 같지만, 사실 지하철은
전기에너지를 이용해 움직이는 거야.

전동기가 전기에너지를 운동에너지로 바꾸면
연결된 바퀴가 회전하면서 지하철이 움직이지.

다음에 지하철을 탈 때,
수많은 사람을 움직이는
숨은 과학을 떠올려 보자!`,
  },
  {
    id: "ship",
    exhibitId: "B31",
    ordinal: "마지막 교통수단",
    vehicle: "배",
    intro: `지하철을 타고 도시 구간을
지나오느라 고생했어!
이제 마지막 경로가 남았어.

이번에는 육지를 벗어나
물 위를 이동하는 특별한 교통수단,
배를 만나볼 거야. 🚢

배는 어떻게 움직이고,
왜 멀미가 나는지 알아보자!`,
    complete: `멀미는 단순히
배가 흔들려서 생기는 게 아니야.

눈이 느끼는 움직임과
귀 속 평형기관이 느끼는 움직임이
서로 다를 때 몸이 혼란을 느끼면서
멀미가 생기는 거야.

멀미는 배뿐만 아니라 자동차, 버스,
비행기를 탈 때도 생길 수 있어!

멀미가 걱정된다면
출발하기 30분~1시간 전에
멀미약을 먹거나 붙이면
훨씬 편안하게 여행할 수 있어! 💊✨`,
  },
];

export const questions: Question[] = [
  {
    id: "q1",
    exhibitId: "B20",
    type: "multiple",
    question: "빠르게 달리는 자전거가 쉽게 넘어지지 않는 이유는 무엇일까요?",
    choices: [
      "바퀴와 땅 사이의 마찰력이 사라지기 때문에",
      "회전하는 바퀴가 균형을 유지하려는 힘이 생기기 때문에",
      "공기의 저항이 자전거를 잡아주기 때문에",
    ],
    answerIndex: 1,
    explanation:
      "회전하는 바퀴에는 회전 상태를 유지하려는 성질(각운동량 보존)이 있어요. 그래서 자전거는 천천히 달릴 때보다 빠르게 달릴 때 더 안정적으로 균형을 잡을 수 있어요.",
  },
  {
    id: "q2",
    exhibitId: "B20",
    type: "multiple",
    question:
      "체험 방법을 확인한 후 직접 체험해 보세요!\n파란색 바퀴가 몸쪽으로 돌아가는 동안, 핸들을 오른쪽으로 기울이면 의자는 어느 방향으로 회전할까요?",
    choices: ["왼쪽", "오른쪽", "멈춰있다"],
    answerIndex: 0,
    explanation:
      "회전하는 바퀴의 축을 기울이면, 회전 상태를 유지하려는 성질(각운동량 보존) 때문에 의자가 반대 방향인 왼쪽으로 회전해요.",
  },
  {
    id: "q3",
    exhibitId: "B19",
    type: "multiple",
    question:
      "움직이는 물체에 따라 파장이 달라지는 현상을 '도플러 효과'라고 합니다. 자동차가 스피드건에 가까워질 때, 측정되는 파장의 길이는 어떻게 변할까요?",
    choices: ["길어진다", "짧아진다", "변하지 않는다"],
    answerIndex: 1,
    explanation:
      "파동을 내는 물체가 가까워질수록 파장은 짧아지고, 멀어질수록 길어져요. 스피드건은 이 파장의 변화를 이용해 자동차의 속도를 측정해요.",
  },
  {
    id: "q4",
    exhibitId: "B19",
    type: "numeric",
    question: "스피드건으로 직접 뛰어보고,\n내 속도를 측정해 보세요!",
    image: "/assets/q4-speedgun.webp",
    min: 20,
    explanation:
      "정말 빠른걸? 스피드건은 여러분에게 반사되어 돌아오는 파장의 변화, 바로 '도플러 효과'를 이용해 속도를 측정해요.",
  },
  {
    id: "q5",
    exhibitId: "B16",
    type: "multiple",
    question: "다음 중 교통카드 안에 들어 있지 않은 것은 무엇일까요?",
    choices: [
      "정보를 저장하는 IC칩",
      "유도전류를 발생시키는 유도코일",
      "전기를 저장하는 배터리",
    ],
    answerIndex: 2,
    explanation:
      "교통카드 안에는 배터리가 없어요. 단말기에 가까이 가져가면 유도코일에 유도전류가 만들어져 IC칩이 작동하고, 정보가 전달돼요.",
  },
  {
    id: "q6",
    exhibitId: "B16",
    type: "short",
    question: "충전식 교통카드를 단말기에 대어보고,\n잔액을 확인해 보세요.",
    image: "/assets/q6-card-balance.webp",
    answers: ["950", "950원"],
    explanation:
      "선불 교통카드는 태그할 때 남은 잔액을 확인할 수 있어요. 전시물 속 카드에 남은 돈은 950원이에요.",
  },
  {
    id: "q7",
    exhibitId: "B22",
    type: "multiple",
    question: "지하철을 움직이게 하는 전동기는 어떤 에너지 변환을 이용할까요?",
    choices: [
      "운동에너지 → 전기에너지",
      "전기에너지 → 운동에너지",
      "빛에너지 → 전기에너지",
    ],
    answerIndex: 1,
    explanation:
      "전동기는 전기에너지를 운동에너지로 바꿔요. 전동기가 돌면 연결된 바퀴가 회전하면서 지하철이 움직여요.",
  },
  {
    id: "q8",
    exhibitId: "B22",
    type: "short",
    question: "전시물을 작동시켜 보세요!\n움직이는 지하철은 몇호선일까요?",
    image: "/assets/q8-subway-line.webp",
    answers: ["7", "7호선", "7호", "칠호선"],
    explanation: "전시물을 작동시키면 움직이는 지하철은 바로 7호선이에요.",
  },
  {
    id: "q9",
    exhibitId: "B31",
    type: "multiple",
    question: "배를 탈 때 멀미가 나는 주된 이유는 무엇일까요?",
    choices: [
      "배가 너무 빠르게 움직이기 때문에",
      "소리를 너무 많이 듣기 때문에",
      "눈과 귀(평형기관)가 느끼는 움직임 정보가 다르기 때문에",
    ],
    answerIndex: 2,
    explanation:
      "눈이 느끼는 움직임과 귀 속 평형기관이 느끼는 움직임 정보가 서로 다르면, 뇌가 혼란을 느끼면서 멀미가 생겨요.",
  },
  {
    id: "q10",
    exhibitId: "B31",
    type: "ox",
    question: "전시물 내부의 레일 속 공은 높은 곳에서 낮은 곳으로 내려간다.",
    image: "/assets/q10-rail-ball.webp",
    answer: "X",
    explanation:
      "직접 작동시켜 보면, 레일 속 공은 우리 예상과 달리 높은 곳에서 낮은 곳으로 굴러 내려가지 않아요. 눈으로 본 움직임과 실제 느끼는 움직임이 다를 수 있다는 것을 보여주는 전시물이에요.",
  },
];
