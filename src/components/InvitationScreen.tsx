import { SkyOvalButton } from "./SkyOvalButton";

type Props = {
  onNext: () => void;
};

/** 본문은 디자인 시안 이미지로 표시 (수정사항: 본문 이미지파일로 변경) */
const BODY_ALT = `안녕! 나는 B전시실 길잡이 요정 블루미야.
여름방학을 맞아 특별한 여행을 준비했어!
하지만 여행의 목적지는 아직 비밀이야. 🤫
목적지를 알아내려면 블루미가 준비한 다양한 교통수단을 이용해야 해!
각 교통수단에는 흥미로운 과학 원리가 숨어 있어.
그 원리를 이해해야 안전한 여행을 완성할 수 있지.
이번 여행에서는 자전거부터 버스, 지하철, 배까지!
블루미와 함께 다양한 이동경로를 따라
B전시실 곳곳에 있는 전시물을 찾아 퀴즈를 하나씩 풀어 보자.
모든 퀴즈를 해결하고 여행 준비를 마치면,
블루미가 숨겨 둔 특별한 목적지를 공개할게!`;

export function InvitationScreen({ onNext }: Props) {
  return (
    <div className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-white">
      <div className="pt-8 flex justify-center shrink-0">
        <img
          src="/assets/bloomi-go-title.webp"
          alt="블루미 GO!"
          className="w-[170px] h-auto select-none"
          draggable={false}
        />
      </div>

      <div className="flex-1 w-full px-6 pt-5 pb-4 flex items-center justify-center">
        <img
          src="/assets/invitation-body.webp"
          alt={BODY_ALT}
          className="w-full max-w-[350px] h-auto select-none"
          draggable={false}
        />
      </div>

      <div className="pb-10 pt-2 flex justify-center shrink-0">
        <SkyOvalButton onClick={onNext} className="px-12 text-2xl">
          GO!
        </SkyOvalButton>
      </div>
    </div>
  );
}
