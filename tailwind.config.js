/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Bellefair: ["Bellefair", "serif"],
        BarlowCondensed: ["Barlow Condensed", "serif"],
      },
      colors: {
        "gray-blue": "#D0D6F9",
        grey: "rgba(255, 255, 255, 0.04)",
      },
      fontSize: {
        "80px": "80px",
        "40px": "40px",
        ssm: "14px",
        sm: "15px",
        "16px": "16px",
        "18px": "18px",
        lg: "20px",
        xl: "24px",
        "2xl": "28px",
        "3xl": "32px",
        "5xl": "56px",
        "7xl": "80px",
        "8xl": "100px",
        "9xl": "150px",
      },
      letterSpacing: {
        wide: "2.36px",
        wider: "2.7px",
      },
      borderWidth: {
        1: "1px",
      },
      screens: {
        mobile: "430px",
        tablet: "768px",
        desktop: "1240px",
      },
      backgroundImage: {
        "home-mobile-screen":
          "url('starter-code/assets/home/background-home-mobile.jpg')",
        "home-tablet-screen":
          "url('starter-code/assets/home/background-home-tablet.jpg')",
        "home-desktop-screen":
          "url('starter-code/assets/home/background-home-desktop.jpg')",
        "dest-mobile-screen":
          "url('starter-code/assets/destination/background-destination-mobile.jpg')",
        "dest-tablet-screen":
          "url('starter-code/assets/destination/background-destination-tablet.jpg')",
        "crew-mobile-screen":
          "url('starter-code/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet-screen":
          "url('starter-code/assets/crew/background-crew-tablet.jpg')",
        "tech-mobile-screen":
          "url('starter-code/assets/technology/background-technology-mobile.jpg')",
        "tech-tablet-screen":
          "url('starter-code/assets/technology/background-technology-tablet.jpg')",
      },
      height: {
        76: "300px",
        "80px": "80px",
        84: "330px",
        "60px": "60px",
        "274px": "274px",
        572: "572px",
        "445px": "445px",
        "473px": "473px",
        "650px": "650px",
        "654px": "654px",
        "681px": "681px",
        "712px": "712px",
      },
      width: {
        "60px": "60px",
        "80px": "80px",
        "274px": "274px",
        76: "300px",
        "445px": "445px",
        "450px": "450px",
        "453px": "453px",
        "473px": "473px",
        "488px": "488px",
        "444px": "444px",
        "614px": "614px",
        "515px": "515px",
        "554px": "554px",
      },
    },
  },
  plugins: [],
};
