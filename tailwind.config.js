/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          black: "#000",
          darkslategray: {
            "100": "#474747",
            "200": "#41324e",
            "300": "#373737",
          },
          darkgray: {
            "100": "#b1b1b1",
            "200": "#9a9a9a",
          },
          white: "#fff",
          royalblue: "rgba(119, 124, 246, 0.4)",
          gray: {
            "100": "#939393",
            "200": "#141414",
            "300": "rgba(255, 255, 255, 0.05)",
            "400": "rgba(17, 17, 17, 0.4)",
            "500": "rgba(18, 18, 18, 0.54)",
            "600": "rgba(121, 121, 121, 0.26)",
            "700": "rgba(128, 128, 128, 0.15)",
          },
          gainsboro: {
            "100": "#e8e8e8",
            "200": "#e6e6e6",
            "300": "rgba(230, 230, 230, 0.05)",
          },
          dimgray: {
            "100": "#6b6b6b",
            "200": "#525252",
          },
          lightgray: "#ccc",
          plum: {
            "100": "#b494ce",
            "200": "rgba(150, 125, 173, 0.5)",
            "300": "rgba(180, 148, 206, 0.7)",
          },
          cornflowerblue: "#b1b4ff",
          mediumpurple: "rgba(145, 82, 189, 0.49)",
          slategray: {
            "100": "rgba(124, 100, 147, 0.5)",
            "200": "rgba(124, 100, 147, 0.4)",
          },
          mediumslateblue: {
            "100": "#737aff",
            "200": "#5a61ff",
            "300": "rgba(90, 97, 255, 0.26)",
            "400": "rgba(90, 97, 255, 0.15)",
          },
        },
        spacing: {},
        fontFamily: {
          figtree: "Figtree",
          "plus-jakarta-sans": "'Plus Jakarta Sans'",
          "space-grotesk": "'Space Grotesk'",
        },
        borderRadius: {
          "69xl": "88px",
          "81xl": "100px",
          "51xl": "70px",
          "26xl": "45px",
          "19xl": "38px",
          "xl-5": "20.5px",
          "29xl": "48px",
        },
      },
      fontSize: {
        "3xl": "22px",
        "14xl": "33px",
        xl: "20px",
        "7xl": "26px",
        "9xl": "28px",
        "13xl": "32px",
        lgi: "19px",
        "27xl": "46px",
        "18xl": "37px",
        "2xl": "21px",
        "23xl": "42px",
        "15xl": "34px",
        inherit: "inherit",
      },
      screens: {
        mq1575: {
          raw: "screen and (max-width: 1575px)",
        },
        mq1275: {
          raw: "screen and (max-width: 1275px)",
        },
        mq825: {
          raw: "screen and (max-width: 825px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
  