// 퀴즈 클리어 화면 도달 수(= 완주자 수)를 일 단위로 집계한다.
// Firestore REST API를 직접 호출해 `pageViews/{YYYY-MM-DD}` 문서의 count를 1 올린다.
// (firebase SDK를 붙이면 번들이 ~100KB 늘어나는데, 카운터 하나에는 과하다)

const PROJECT_ID = "gen-lang-client-0630377070";
const API_KEY = "AIzaSyAXqNa1FCppXE_km0m1bzRdHwYZGw7EkBs";

const DOCS = `projects/${PROJECT_ID}/databases/(default)/documents`;
const COMMIT_URL = `https://firestore.googleapis.com/v1/${DOCS}:commit?key=${API_KEY}`;

// 개발 중에는 실제 집계가 오염되지 않도록 별도 컬렉션에 쌓는다.
const COLLECTION = import.meta.env.DEV ? "pageViewsDev" : "pageViews";

const SESSION_KEY = "bloomiego:completionCounted";

// 관람객 기기의 타임존과 무관하게 KST 기준 날짜로 묶는다.
function kstDate(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

// 새로고침·뒤로가기로 마지막 화면에 다시 들어와도 세션당 한 번만 센다.
function alreadyCounted(): boolean {
  try {
    if (sessionStorage.getItem(SESSION_KEY)) return true;
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    // 시크릿 모드 등에서 sessionStorage가 막혀도 집계는 계속한다
  }
  return false;
}

// 집계는 부가 기능이므로 어떤 실패도 화면을 막아서는 안 된다.
// useEffect 안에서 throw하면 React가 트리를 통째로 언마운트하므로(에러 바운더리 없음)
// Intl 타임존 미지원, fetch 미지원 같은 동기 예외까지 전부 여기서 삼킨다.
export function recordCompletion(): void {
  try {
    if (alreadyCounted()) return;

    void fetch(COMMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        writes: [
          {
            transform: {
              document: `${DOCS}/${COLLECTION}/${kstDate()}`,
              fieldTransforms: [
                { fieldPath: "count", increment: { integerValue: "1" } },
              ],
            },
          },
        ],
      }),
    }).catch(() => {
      // 네트워크 실패·권한 거부 등 비동기 실패
    });
  } catch {
    // 동기 실패. 집계를 포기할 뿐, 활동지는 그대로 진행된다
  }
}
