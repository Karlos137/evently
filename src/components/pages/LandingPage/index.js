import React from "react";

//react-media import
import Media from "react-media";

//svg imports
import { ReactComponent as SignInIllu } from "../../../images/illustrations/sign-in-illu.svg";
import { ReactComponent as SignUpIllu } from "../../../images/illustrations/sign-up-illu.svg";

//react router imports
import { Route, Switch } from "react-router-dom";

//react components imports
import LogoHeader from "./LogoHeader";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

//styled-components imports
import Wrapper from "./Wrapper";
import FormWrapper from "./FormWrapper";
import SignInIlluWrapper from "./SignInIlluWrapper";
import SignUpIlluWrapper from "./SignUpIlluWrapper";

const LandingPage = () => {
  return (
    <Wrapper>
      <Switch>
        <Route
          path="/"
          render={() => {
            return (
              <>
                <FormWrapper>
                  <LogoHeader />
                  <SignInForm />
                </FormWrapper>
                <Media
                  query="(min-width: 1024px)"
                  render={() => {
                    return (
                      <SignInIlluWrapper>
                        <SignInIllu />
                      </SignInIlluWrapper>
                    );
                  }}
                />
              </>
            );
          }}
          exact
        />
        <Route
          path="/sign-up"
          render={() => {
            return (
              <>
                <FormWrapper>
                  <LogoHeader />
                  <SignUpForm />
                </FormWrapper>
                <Media
                  query="(min-width: 1024px)"
                  render={() => {
                    return (
                      <SignUpIlluWrapper>
                        <SignUpIllu />
                      </SignUpIlluWrapper>
                    );
                  }}
                />
              </>
            );
          }}
        />
      </Switch>
    </Wrapper>
  );
};

export default LandingPage;
