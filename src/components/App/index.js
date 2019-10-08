import React from "react";

//react router import
import { BrowserRouter } from "react-router-dom";

//styled-components imports
import { ThemeProvider } from "styled-components";
import theme from "../../utils-styled-components/theme";
import GlobalStyle from "../../utils-styled-components/global";

//react components imports
import LandingPage from "../pages/LandingPage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <LandingPage />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
