/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Simon's color palette
        "bg-primary": "#0f1419",
        "bg-secondary": "#1a1f2e",
        "bg-card": "#1e2532",
        "text-primary": "#e6e6e6",
        "text-secondary": "#a8b2d1",
        accent: "#64ffda",
        "accent-hover": "#52d4ba",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"Space Mono"', "monospace"],
      },
      fontSize: {
        "hero-name": ["clamp(40px, 8vw, 80px)", { lineHeight: "1.1" }],
        "hero-subtitle": ["clamp(40px, 8vw, 80px)", { lineHeight: "1.1" }],
        "section-title": ["clamp(26px, 5vw, 32px)", { lineHeight: "1.1" }],
      },
      spacing: {
        section: "clamp(60px, 15vh, 100px)",
      },
    },
  },
  plugins: [],
};
