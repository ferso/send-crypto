import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#111325",
      gradient:
        "linear-gradient(to bottom, #1a2373, #19226b, #192163, #18205b, #181f53, #171e4c, #171c46, #161b3f, #141938, #131732, #12152b, #111325)",
    },
    secondary: {
      main: "#FFB400",
    },

    info: {
      main: "#045fc8",
    },

    background: {
      paper: "#ffffff",
      accent: "#f4f5f9",
      default:
        "linear-gradient(130deg,rgba(219, 219, 231, 1) 0%,rgba(247, 247, 247, 1) 100%)",
    },
  },

  typography: {
    fontFamily: [
      "Readex Pro",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

LightTheme = responsiveFontSizes(LightTheme);
export default LightTheme;
