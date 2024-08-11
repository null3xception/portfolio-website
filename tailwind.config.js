/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-75": "#12100E",
        "brown-25": "#a59586",
        "brown-50": "#7f7367",
        "brown-75": "#5E4429",
        "brown-100": "#2d2824",
        "white-75": "#D9D5D0",
        "white-100": "#CAC6C0", 
      },
      backgroundImage: {
        "watermark": "url('./assets/watermark.png')",
        "services": "url('./assets/Services.png')",
        "skills": "url('./assets/Skills.png')",
        "projects": "url('./assets/Projects.png')",
        "contactme": "url('./assets/contactme.png')"
      },
      fontFamily: {
        anonymousPro: ["Anonymous Pro", "serif"], 
        caveat: ["Caveat", "serif"],
        inter: ["Inter", "serif"],
      },
      content: {
        "watermark": "url('./assets/watermark.png')",
        "sidedesign": "url('./assets/sidedesign.png')"
      },
    },
    screens: {
      xs: "360px",
      sm: "768px",
      md: "1060px",
      xl: '1280px',
      xxl: '1920px'
    },
  },
  plugins: [],
}