import {
  AppBar,
  Box,
  Breadcrumbs,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { theme } from "../theme";

interface AppProps {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color="secondary" position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/">Recapple</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <Breadcrumbs aria-label="breadcrumb">
        <Link href="/">Home</Link>
        <Link color="inherit" href="/devices/watch">
          Watch
        </Link>
        <Typography color="text.primary">Series 8</Typography>
      </Breadcrumbs> */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
