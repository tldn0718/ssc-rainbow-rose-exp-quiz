import { SkyOvalButton } from "./SkyOvalButton";

type Props = {
  onNext: () => void;
};

const BODY = `안녕! 나는 B전시실 길잡이 요정 블루미야. 🌈
여름방학을 맞아 특별한 여행을 준비했어!
그치만, 여행의 목적지는 아직 비밀이야. 🤫

목적지를 알아내려면 블루미가 준비한
특별한 여행 코스를 따라가야 해.
이번 여행에서는 자전거부터 버스, 지하철, 배까지!
다양한 교통수단을 이용해 볼 거야.

그런데, 각 교통수단 속에 숨겨진 과학을 알아야
안전한 여행을 완성할 수 있어.
B전시실 곳곳의 전시물을 찾아가며
퀴즈를 하나씩 해결해 보자!

모든 퀴즈를 풀고 여행 준비를 완료하면
블루미가 숨겨둔 특별한 목적지를 공개할게!
🚲🚗🚌🚇🚢`;

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
        <p
          className="text-slate-800 leading-relaxed whitespace-pre-line text-center text-[14.5px]"
          style={{ fontFamily: "'Jua', sans-serif", letterSpacing: "0.01em" }}
        >
          {BODY}
        </p>
      </div>

      <div className="pb-10 pt-2 flex justify-center shrink-0">
        <SkyOvalButton onClick={onNext} className="px-12 text-2xl">
          GO!
        </SkyOvalButton>
      </div>
    </div>
  );
}
