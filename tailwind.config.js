// import { Container } from "postcss";


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}" 
  ],
  darkMode: "class",

  theme: {
    extend: {
        colors : {
            transparent: "transparent",
            
            current: "currentColor",

            blue: "#1E40AF",
            amber: "3F59E0B",
            white: "#ffffff",
            black: "#000000",
        },
        container: {
            center: true,
            padding: {
                DEFAULT : "1rem",
                sm: "3rem"
            },
        },
    },
  },
  plugins: [],
};
