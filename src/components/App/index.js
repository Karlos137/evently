import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

//import action
import { signIn } from "../../store/actions/userActions";

//styled component import
import Loading from "./Loading";
import LoadingWrapper from "./LoadingWrapper";

//import loading svg
import loadingIcon from "../../images/loading.svg";

//firebase import
import { auth } from "../../firebase";

//react router import
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
  const [loading, setLoading] = useState(true);
  const user = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const renderContent = () => {
    if (user.data === null) {
      return (
        <>
          <LandingPage />
        </>
      );
    } else {
      return (
        <>
          <Redirect to="/main" />
          <Switch>
            <Route path="/main">
              <Navbar />
              <MainPage />
            </Route>
            <Route path="/profile/:id">
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
        </>
      );
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        //user is signed in
        console.log("je přihlášen");
        dispatch(signIn(user));
        setLoading(false);
      } else {
        //no user is signed in

        console.log("není přihášen");
        setLoading(false);
      }
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        {loading ? (
          <LoadingWrapper>
            <Loading src={loadingIcon} />
          </LoadingWrapper>
        ) : (
          <>{renderContent()}</>
        )}
      </Router>
    </ThemeProvider>
  );
};

export default App;
