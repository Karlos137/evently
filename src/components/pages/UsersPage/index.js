import React from "react";
import Media from "react-media";

//styled components imports
import Wrapper from "./Wrapper";
import ContentWrapper from "./ContentWrapper";
import Heading from "./Heading";
import SearchBar from "../../SearchBar";
import UsersWrapper from "./UsersWrapper";
import User from "../../User";
import UsersIluWrapper from "./UsersIluWrapper";
import UsersIlu from "./UsersIlu";

//svg import
import usersIlu from "../../../images/illustrations/users-ilu.svg";

const UsersPage = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Heading>Uživatelé</Heading>
        <SearchBar placeholder="Hledej uživatele" />
        <UsersWrapper>
          <User name="Gordon Freeman" email="half@life.com" />
          <User name="Lara Croft" email="lara@mail.com" />
          <User name="Kratos" email="godofwar@gg.com" />
        </UsersWrapper>
      </ContentWrapper>
      <Media query="(min-width: 1200px)">
        {matches =>
          matches ? (
            <UsersIluWrapper>
              <UsersIlu src={usersIlu} />
            </UsersIluWrapper>
          ) : null
        }
      </Media>
    </Wrapper>
  );
};

export default UsersPage;
