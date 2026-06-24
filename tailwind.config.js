/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "#09090f",
        background: "#09090f",
        "on-background": "#f1f0ff",
        "on-surface": "#f1f0ff",
        "on-surface-variant": "#9b9ab0",
        primary: "#c8c7e8",
        secondary: "#a78bfa",
        tertiary: "#bcc7de",
        outline: "#5c5c72",
        "outline-variant": "#2e2e42",
        "surface-container-lowest": "#050509",
        "surface-container-low": "#0e0e1a",
        "surface-container": "#141420",
        "surface-container-high": "#1c1c2c",
        "surface-container-highest": "#252537",
        "on-primary": "#283044",
        "on-secondary": "#1e004d",
        error: "#ffb4ab",
        "error-container": "#93000a",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        gutter: "24px",
        "margin-x": "32px",
        "stack-sm": "8px",
        "container-max": "1200px",
        "stack-md": "16px",
        "stack-lg": "48px",
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(6deg)' },
          '50%': { transform: 'translateY(-10px) rotate(8deg)' },
        },
        scaleInX: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 0.6s ease both',
        'float': 'float 5s ease-in-out infinite',
        'scale-in-x': 'scaleInX 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      fontFamily: {
        "display-lg": ["Hanken Grotesk", "sans-serif"],
        "headline-lg-mobile": ["Hanken Grotesk", "sans-serif"],
        "headline-md": ["Hanken Grotesk", "sans-serif"],
        "headline-sm": ["Hanken Grotesk", "sans-serif"],
        "headline-lg": ["Hanken Grotesk", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-md": ["JetBrains Mono", "monospace"],
        "body-lg": ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
