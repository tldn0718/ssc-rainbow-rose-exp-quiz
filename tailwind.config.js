/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: {
          1: "#5DC3EE",
          2: "#86D4F0",
          3: "#BCE7F5",
          4: "#E2F3FA",
        },
        deepSky: "#1E78A8",
        pinkBtn: {
          light: "#FF8FBE",
          DEFAULT: "#F75A99",
          dark: "#D63E80",
        },
        rosePink: "#FFD6E5",
        roseAccent: "#F8A5C2",
      },
      fontFamily: {
        display: [
          "'Jua'",
          "'Poppins'",
          "ui-rounded",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        body: [
          "'Noto Sans KR'",
          "'Poppins'",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      boxShadow: {
        pinkBtn: "0 6px 0 #C72E6F, 0 12px 24px rgba(247,90,153,0.35)",
        soft: "0 6px 20px rgba(0, 0, 0, 0.08)",
        card: "0 4px 24px rgba(94, 165, 207, 0.18)",
      },
      borderRadius: {
        bubble: "28px",
      },
      backgroundImage: {
        rainbow:
          "linear-gradient(180deg, #5DC3EE 0%, #98DCF2 35%, #C7EBF7 60%, #E5F4FB 80%, #DDEFA9 100%)",
        rainbowArc:
          "radial-gradient(ellipse at 50% 100%, transparent 0%, transparent 38%, #FF8FA3 39%, #FFB36B 44%, #FFE066 49%, #B5E48C 54%, #80CFFF 59%, #C29BFF 64%, transparent 70%)",
      },
      animation: {
        "pop-in": "popIn .35s cubic-bezier(.18,.89,.32,1.28)",
        "bounce-soft": "bounceSoft 1.6s ease-in-out infinite",
        "fade-up": "fadeUp .3s ease-out",
        twinkle: "twinkle 2.5s ease-in-out infinite",
      },
      keyframes: {
        popIn: {
          "0%": { transform: "scale(.85)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        fadeUp: {
          "0%": { transform: "translateY(8px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
