const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "custom-black": "rgba(0,0,0,0.7)",
        "custom-shadow": "rgba(0,0,0,0.5)",
        "custom-color": "#eee",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
