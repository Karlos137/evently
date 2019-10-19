import React from "react";

//react router import
import { BrowserRouter, Switch, Route } from "react-router-dom";

//styled-components imports
import { ThemeProvider } from "styled-components";
import theme from "../../utils-styled-components/theme";
import GlobalStyle from "../../utils-styled-components/global";

//react components imports
import Navbar from "../Navbar";
import MainPage from "../pages/MainPage";
import LandingPage from "../pages/LandingPage";
import ProfilePage from "../pages/ProfilePage";
import UsersPage from "../pages/UsersPage";
import GroupsPage from "../pages/GroupsPage";
import GroupPage from "../pages/GroupPage";
import EventPage from "../pages/EventPage";
import CreateGroupPage from "../pages/CreateGroupPage";
import CreateEventPage from "../pages/CreateEventPage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <LandingPage />
        <Switch>
          <Route path="/main">
            <Navbar />
            <MainPage />
          </Route>
          <Route path="/profile">
            <Navbar />
            <ProfilePage />
          </Route>
          <Route path="/create-event">
            <Navbar />
            <CreateEventPage />
          </Route>
          <Route path="/create-group">
            <Navbar />
            <CreateGroupPage />
          </Route>
          <Route path="/users">
            <Navbar />
            <UsersPage />
          </Route>
          <Route path="/groups">
            <Navbar />
            <GroupsPage />
          </Route>
          <Route path="/group/:id">
            <Navbar />
            <GroupPage />
          </Route>
          <Route path="/event/:id">
            <Navbar />
            <EventPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
