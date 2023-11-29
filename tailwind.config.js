/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation: {
      opa: "opa 2s",
      shine: "shine .75s",
    },
    keyframes: {
      opa: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      shine: {
        "100%": { left: "125%" },
      },
    },
    extend: {
      skew: {
        25: "25deg",
      },
      fontFamily: {
        segoe: ["SegoeUI-Bold"],
        goeLight: ["SegoeUI-Light"],
      },
      fontSize: {
        "10px": "10px",
        "13px": "13px",
        "15px": "15px",
        "50px": "50px",
      },
      boxShadow: {
        rgba: "0 5px 54px rgba(0, 0, 0, 0.21)",
        rgba08: "0 0 0 rgba(0,0,0,.08)",
      },
      backgroundImage: {
        "blue-bottom": "linear-gradient(-50deg,#2692ce 0%,#007fc6 100%)",
        "black-top": "linear-gradient(to top,#000000 0%,rgba(0,0,0,0) 100%)",
        rgba: "linear-gradient(to right,rgba(255,255,255,0) 0%,rgba(255,255,255,.3) 100%)",
        orange: "linear-gradient(to right, #f69321 0%, #ffa843 100%)",
        "black-rgba":
          "linear-gradient(to right, #000000 0%, #000000 44%, rgba(0, 0, 0, 0) 100%)",
        "linear-gradient": "linear-gradient(-231deg, #f69321 0%, #ffa843 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      translate: {
        rotate: "rotate(-90deg)",
      },
      width: {
        "10px": "10px",
        "14px": "14px",
        "27px": "27px",
        "30px": "30px",
        "150px": "150px",
        "158px": "158px",
        "175px": "175px",
        "350px": "350px",
        "390px": "390px",
        "3150px": "3150px",
        "5460px": "5460px",
        "calc-20px": "calc(calc(100% / 2) - 20px)",
        "calc-34px": "calc(100% - 34px)!important",
      },
      minWidth: {
        "120px": "120px",
        "150px": "150px",
        auto: "auto",
      },
      maxWidth: {
        "290px": "290px",
        "600px": "600px",
        "950px": "950px",
      },
      height: {
        "1px": "1px",
        "30px": "30px",
        "60px": "60px",
        "150px": "150px",
        "152px": "152px",
        "314px": "314px",
      },
      minHeight: {
        "1px": "1px",
        "150px": "150px",
        "450px": "450px",
      },
      maxHeight: {
        "150px": "150px",
        "165px": "165px",
        "183px": "183px",
        "300px": "300px",
      },
      lineHeight: {
        1.2: "1.2",
        "19px": "19px",
        "22px": "22px",
        "26px": "26px",
        "38px": "38px",
        "60px": "60px",
      },
      inset: {
        "2px": "2px",
        "5px": "5px",
        "17px": "17px",
        "18px": "18px",
        "19px": "19px",
        "25px": "25px",
        "35px": "35px",
        "60px": "60px",
        "10px": "10px",
        "1.2rem": "1.2rem",
      },
      scale: {
        120: "1.20",
      },
      margin: {
        "2px": "2px",
        "5px": "5px",
        "10px": "10px",
        "15px": "15px",
        "25px": "25px",
        "30px": "30px",
        "38px": "38px",
        "50px": "50px",
        "60px": "60px",
        "50vw": "50vw",
      },
      padding: {
        "5px": "5px",
        "10px": "10px",
        "15px": "15px",
        "25px": "25px",
        "30px": "30px",
        "50px": "50px",
        "70px": "70px",
      },
      borderRadius: {
        "10px": "10px",
        "15px": "15px",
        "23px": "23px",
        "25px": "25px",
      },
      borderWidth: {
        "15px": "15px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

// colors: {
//   dark: "#1b1b1b",
//   light: "#fff",
//   accent: "#7B00D3",
//   accentDark: "#ffdb4d",
//   gray: "#747474",
// }
