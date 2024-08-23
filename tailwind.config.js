/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Merging colors from both configurations
        amber: {
          700: "#fca311"
        },
        black: {
          900: "#07061c",
          "900_01": "#010c15",
          "900_02": "#000000",
          "900_11": "#00000011",
          "900_1c": "#0000001c",
          "900_33": "#00000033"
        },
        blue: {
          a400_3f: "#377dff3f"
        },
        blue_gray: {
          100: "#d9d9d9",
          200: "#b5b5c3",
          300: "#8a92a6",
          400: "#75929f",
          700: "#455a64",
          800: "#3d3b50",
          900: "#232d42",
          "700_01": "#48475d",
          "700_02": "#4a4e69",
          "800_01": "#3c4a50"
        },
        deep_purple: {
          400: "#8f55a2",
          "400_60": "#8f55a260"
        },
        f2: "#01031a",
        gray: {
          50: "#f4f7fe",
          100: "#f5f5f5",
          200: "#707679",
          300: "#e5e0d5",
          400: "#bdbdbd",
          500: "#919191",
          600: "#6c6c6c",
          800: "#41244a",
          900: "#212121",
          "500_01": "#9e9e9e",
          "600_01": "#424242",
          "600_02": "#707579",
          "800_2b": "#41244a2b"
        },
        green: {
          a100: "#b9fbc0"
        },
        indigo: {
          200: "#a3aed0",
          "900_bf": "#060859bf"
        },
        light_green: {
          800: "#4f772d"
        },
        light_mode: {
          gray: {
            "70_616161": "#616161",
            "95_1a1a1a": "#1a1a1a"
          }
        },
        purple: {
          200: "#d398ba",
          "200_01": "#d29ab8"
        },
        white: {
          a700_bf: "#ffffffbf"
        },
        // Additional colors from the second config
        gainsboro: {
          "100": "#e5e7eb",
          "200": "#e0e0e0",
          "300": "#d9d9d9",
        },
        slategray: {
          "100": "#6b7280",
          "200": "#75577d",
        },
        icons: "#41244b",
        darkslategray: {
          "100": "#3c4a50",
          "200": "#3d3c51",
          "300": "#33364d",
          "400": "#333543",
          "500": "#2c2e3e",
        },
        whitesmoke: {
          "100": "#f9fafb",
          "200": "#f1f1f1",
        },
        text: "#010c15",
        silver: "#b5b5c3",
        lightsteelblue: "#a3aed0",
        ghostwhite: "#f4f7fe",
        mediumpurple: {
          "100": "#8f55a2",
          "200": "rgba(143, 85, 162, 0.38)",
        },
        aquamarine: "#b9fbc0",
        orange: "#fca311",
        dimgray: {
          "100": "#6c6c6c",
          "200": "#49485e",
        },
        thistle: "#d29ab8",
        plum: "#d398ba",
        darkolivegreen: "#4f772d",
        lightslategray: "#808b9b",
        saddlebrown: "#4b260d",
      },
      boxShadow: {
        // Combining shadows
        xs: "0 4px 15px 0 #0000001c",
        sm: "0 2px 4px 0 #377dff3f",
        md: "0 4px 15px 0 #00000011",
        bs: "inset 24px 32px 184px 24px #060859bf",
        strong: '0 50px 50px -5px rgba(0, 0, 0, 0.1), 0 50px 50px -5px rgba(0, 0, 0, 0.04)'
      },
      fontFamily: {
        // Merging font families
        dmsans: "DM Sans",
        inter: "Inter",
        poppins: "Poppins",
        worksans: "Work Sans",
        bevietnam: "Be Vietnam",
        oxygen: "Oxygen",
        "mobile-base-bold": "'DM Sans'",
      },
      backgroundImage: {
        // Merging background images
        gradient: "radial-gradient(180deg, #41244a, #8f55a2)",
        gradient1: "radial-gradient(180deg, #41244a, #8f55a2), url(/public/images/img_graphic.png)"
      },
      borderRadius: {
        // Merging border radius
        "12xs-7": "0.7px",
        "12xs": "1px",
        "21xl": "40px",
        "81xl": "100px",
        "6xs": "7px",
        "13xl": "32px",
      },
    },
    fontSize: {
      // Merging font sizes
      sm: "14px",
      base: "16px",
      xs: "12px",
      xl: "20px",
      "4xl": "23px",
      smi: "13px",
      "2xs": "11px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "sm-1": "13.1px",
      "smi-1": "12.1px",
      mid: "17px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      // Merging screens
      md: { max: "1050px" },
      sm: { max: "550px" },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [
    // Merging plugins
    require("@tailwindcss/forms")
  ],
  corePlugins: {
    // Merging core plugins
    preflight: false,
  },
};
