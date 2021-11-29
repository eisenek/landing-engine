import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const globalTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#093769",
      light: "#f2f6fd",
      dark: "#deedff",
    },
    secondary: {
      main: "#3deabf",
    },
    text: {
      primary: "#0b4684",
      secondary: "#6c7075",
      disabled: "#c1c5c9",
    },
  },
});
// Create a theme instance.
let theme = createTheme({
  ...globalTheme,
  typography: {
    allVariants: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
      fontWeight: "600",
    },
    h2: {
      fontWeight: "900",
      fontSize: 36,
      [globalTheme.breakpoints.up("md")]: { fontSize: 36, lineHeight: 3 },
      [globalTheme.breakpoints.down("md")]: { fontSize: 18, lineHeight: 1.625 },
    },
    body1: {
      fontSize: 21,
      [globalTheme.breakpoints.up("md")]: { fontSize: 21, lineHeight: 1.75 },
      [globalTheme.breakpoints.down("md")]: { fontSize: 12, lineHeight: 1.125 },
    },
    body2: {
      fontSize: 18,
      [globalTheme.breakpoints.up("md")]: { fontSize: 18, lineHeight: 1.75 },
      [globalTheme.breakpoints.down("md")]: { fontSize: 12, lineHeight: 1 },
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          "& u": {
            position: "relative",
            textDecoration: "none",
            "&::after": {
              height: "8px",
              borderRadius: "4px",
              content: "''",
              position: "absolute",
              top: "1em",
              zIndex: "-1",
              left: 0,
              width: "100%",
              backgroundColor: "#3deabf",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          fontWeight: 900,
          borderRadius: "27.5px",
          objectFit: "contain",
          textTransform: "capitalize",
          [globalTheme.breakpoints.up("xs")]: {
            fontSize: 10,
            padding: "8px 18px"},
          [globalTheme.breakpoints.up("md")]: {
            fontSize: 18,
            padding: "16px 40px"
          },
        },
        containedPrimary: {
          backgroundColor: "#f2f6fd",
          color: "#0b4684",
          "&:hover": { backgroundColor: "#deedff", color: "#0b4684" },
        },
        containedSecondary: {
          backgroundColor: globalTheme.palette?.secondary?.main,
          color: globalTheme.palette?.primary?.main,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
