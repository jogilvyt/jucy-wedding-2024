/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-green": "#184E2C",
      "middle-green": "#467156",
      "light-green": "#ECF4E7",
      lilac: "#979EC3",
      "dark-lilac": "#878eaf",
      beige: "#FFF8F3",
      pink: "#DE6279",
      white: "#ffffff",
    },
    fontFamily: {
      sans: ["Helvetica Neue", "sans-serif"],
    },
    extend: {
      cursor: {
        tada: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='42' height='50' viewport='0 0 100 100' style='fill:black;font-size:25px;'><text y='50%'>🎉</text></svg>") 16 0, auto`,
        cheers: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='42' height='50' viewport='0 0 100 100' style='fill:black;font-size:25px;'><text y='50%'>🥂</text></svg>") 16 0, auto`,
        calendar: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='42' height='50' viewport='0 0 100 100' style='fill:black;font-size:25px;'><text y='50%'>🗓️</text></svg>") 16 0, auto`,
        taxi: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='42' height='50' viewport='0 0 100 100' style='fill:black;font-size:25px;'><text y='50%'>🚕</text></svg>") 16 0, auto`,
        car: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='42' height='50' viewport='0 0 100 100' style='fill:black;font-size:25px;'><text y='50%'>🚗</text></svg>") 16 0, auto`,
        train: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='42' height='50' viewport='0 0 100 100' style='fill:black;font-size:25px;'><text y='50%'>🚂</text></svg>") 16 0, auto`,
        snooze: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='42' height='50' viewport='0 0 100 100' style='fill:black;font-size:25px;'><text y='50%'>😴</text></svg>") 16 0, auto`,
        questions: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='42' height='50' viewport='0 0 100 100' style='fill:black;font-size:25px;'><text y='50%'>🤔</text></svg>") 16 0, auto`,
        heart: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='42' height='50' viewport='0 0 100 100' style='fill:black;font-size:25px;'><text y='50%'>💖</text></svg>") 16 0, auto`,
        hug: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='42' height='50' viewport='0 0 100 100' style='fill:black;font-size:25px;'><text y='50%'>🤗</text></svg>") 16 0, auto`,
      },
    },
  },
  plugins: [],
};
