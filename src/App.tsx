import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import "./styles/globals.scss";

import { Home } from "@/pages/Home";
import { Career } from "@/pages/Career";
import { Project } from "@/pages/Project";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <Career />
      <Project />
    </ThemeProvider>
  );
}

export default App;
