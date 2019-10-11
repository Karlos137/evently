import React from "react";

//react router import
import { BrowserRouter, Switch, Route } from "react-router-dom";

//styled-components imports
import { ThemeProvider } from "styled-components";
import theme from "../../utils-styled-components/theme";
import GlobalStyle from "../../utils-styled-components/global";

//react components imports
import Navbar from "../Navbar";
import LandingPage from "../pages/LandingPage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <LandingPage />
        <Switch>
          <Route path="/main">
            <Navbar />
          </Route>
          <Route path="/profile">
            <Navbar />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
