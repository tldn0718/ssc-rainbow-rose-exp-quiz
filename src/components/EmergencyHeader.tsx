export function EmergencyHeader() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[280px] max-w-full aspect-[2/1] overflow-hidden">
        <img
          src="/assets/secret-invitation-title.png"
          alt="The Secret Invitation - 무지개 장미 탐험대"
          className="w-full h-full object-cover select-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
