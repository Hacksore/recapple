import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: {
      default: "#000",
      paper: "#000",
      
    },
    primary: {
      contrastText: "#fff",
      main: "#000",      
    },
    mode: "dark",
  },
});