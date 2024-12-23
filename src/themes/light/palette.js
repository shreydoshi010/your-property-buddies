import { createTheme } from "@mui/material/styles";


const Palette = (mode) => {
  const contrastText = "#fff";


  return createTheme({
    palette: {
      mode,
      common: { black: "#000", white: "#fff" },
      primary: {
        main: "#375DFB",
        light: "#F6F8FA",
        dark: "#253EA7",
        hover: "#EBF1FF",
      },
      secondary: {
        main: "#9c27b0",
        light: "#ba68c8",
        dark: "#7b1fa2",
        contrastText,
      },
      error: {
        main: "#DF1C41",
        light: "#FDEDF0",
        dark: "#c62828",
        contrastText,
      },
      warning: {
        main: "#ed6c02",
        light: "#ff9800",
        dark: "#e65100",
        contrastText,
      },
      info: {
        main: "#0288d1",
        light: "#03a9f4",
        dark: "#01579b",
        contrastText,
      },
      success: {
        main: "#38C793",
        light: "#4caf50",
        dark: "#1b5e20",
        contrastText,
      },
      grey: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
        A100: "#f5f5f5",
        A200: "#eeeeee",
        A400: "#bdbdbd",
        A700: "#616161",
      },
      surface: {
        700: "#20232D",
      },
      placeHolder: "#868C98",
      contrastThreshold: 3,
      tonalOffset: 0.2,
      text: { primary: "#0A0D14", secondary: "#525866", disabled: "#CDD0D5" },
      divider: "#E2E4E9",
      background: { paper: "#F6F8FA", default: "#fff" },
      neutral: {
        900: "#0A0D14",
        800: "#161922",
        700: "#20232D",
        600: "#31353F",
        500: "#525866",
        400: "#868C98",
        300: "#CDD0D5",
        200: "#E2E4E9",
        100: "#F6F8FA",
        0: "#FFFFFF",
      },
      blue: {
        darker: "#162664",
        dark: "#253EA7",
        base: "#303E8E",
        light: "#C2D6FF",
        lighter: "#EBF1FF",
      },
      orange: {
        darker: "#6E330C",
        dark: "#C2540A",
        base: "#F17B2C",
        light: "#FFDAC2",
        lighter: "#FEF3EB",
      },
      yellow: {
        darker: "#693D11",
        dark: "#B47818",
        base: "#F2AE40",
        light: "#FBDFB1",
        lighter: "#FEF7EC",
      },
      red: {
        darker: "#710E21",
        dark: "#AF1D38",
        base: "#DF1C41",
        light: "#F8C9D2",
        lighter: "#FDEDF0",
      },
      green: {
        darker: "#176448",
        dark: "#2D9F75",
        base: "#38C793",
        light: "#CBF5E5",
        lighter: "#EFFAF6",
      },
      purple: {
        darker: "#2B1664",
        dark: "#5A36BF",
        base: "#6E3FF3",
        light: "#CAC2FF",
        lighter: "#EEEBFF",
      },
      pink: {
        darker: "#620F6C",
        dark: "#9C23A9",
        base: "#E255F2",
        light: "#F9C2FF",
        lighter: "#FDEBFF",
      },
      teal: {
        darker: "#164564",
        dark: "#1F87AD",
        base: "#35B9E9",
        light: "#C2EFFF",
        lighter: "#EBFAFF",
      },
      state: {
        success: "#38C793",
        warn: "#F17B2C",
        error: "#DF1C41",
        info: "#375DFB",
        away: "#F2AE40",
        feat: "#6E3FF3",
        neutral: "#868C98",
        verify: "#35B9E9",
      },
      icon: {
        strong: "#0A0D14",
        sub: "#525866",
        soft: "#868C98",
        disabled: "#CDD0D5",
        white: "#FFF",
      },
      stroke: {
        strong: "#0A0D14",
        sub: "#CDD0D5",
        soft: "#E2E4E9",
        disabled: "#F6F8FA",
        white: "#FFF",
      },
      font: {
        main: "#0A0D14",
        sub: "#525866",
        soft: "#868C98",
        disabled: "#CDD0D5",
        white: "#FFF",
      },
      back: {
        strong: "#0A0D14",
        surface: "#20232D",
        soft: "#E2E4E9",
        weak: "#F6F8FA",
        white: "#FFF",
      },
      prime: {
        darker: "#162664",
        dark: "#253EA7",
        base: "#375DFB",
        light: "#C2D6FF",
        lighter: "#EBF1FF",
      },
    },
  });
};


export default Palette;





