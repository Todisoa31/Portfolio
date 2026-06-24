import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#FBBF24",
    },

    secondary: {
      main: "#DC2626",
    },

    background: {
      default: "#111827",
      paper: "#1F2937",
    },

    text: {
      primary: "#F9FAFB",
      secondary: "#9CA3AF",
    },
  },

  typography: {
    fontFamily: "Inter, sans-serif",
  },

  shape: {
    borderRadius: 16,
  },
});