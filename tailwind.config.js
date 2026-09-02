/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                gold: {
                    DEFAULT: "#C8A960",
                    light: "#E8D5A3",
                    dark: "#8B6914",
                },
                bronze: "#A0824A",
                champagne: "#F5ECD7",
                ink: {
                    DEFAULT: "#08070B",
                    panel: "#0F0E13",
                    border: "rgba(200, 169, 96, 0.08)",
                    soft: "#16151C",
                },
                paper: "#0F0E13",
                muted: "#6B6880",
            },
            fontFamily: {
                display: ["Playfair Display", "Georgia", "serif"],
                body: ["Inter", "system-ui", "sans-serif"],
                mono: ["Fira Code", "monospace"],
            },
            keyframes: {
                blink: {
                    "0%, 50%": { opacity: "1" },
                    "51%, 100%": { opacity: "0" },
                },
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(24px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-12px)" },
                },
                glow: {
                    "0%, 100%": { opacity: "0.4" },
                    "50%": { opacity: "1" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% center" },
                    "100%": { backgroundPosition: "200% center" },
                },
                goldPulse: {
                    "0%, 100%": { opacity: "0.4", boxShadow: "0 0 20px rgba(200, 169, 96, 0.1)" },
                    "50%": { opacity: "1", boxShadow: "0 0 40px rgba(200, 169, 96, 0.3)" },
                },
                spinSlow: {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(360deg)" },
                },
            },
            animation: {
                blink: "blink 1s step-end infinite",
                fadeUp: "fadeUp 0.7s ease-out forwards",
                float: "float 6s ease-in-out infinite",
                glow: "glow 3s ease-in-out infinite",
                shimmer: "shimmer 2.5s ease-in-out infinite",
                goldPulse: "goldPulse 3s ease-in-out infinite",
                spinSlow: "spinSlow 20s linear infinite",
            },
        },
    },
    plugins: [],
};