import React, { useState, useEffect } from "react";
import axios from "axios";
import Media from "react-media";
import { breakpoints } from "../../../utils/responsiveHelpers";

//styled components imports
import Wrapper from "./Wrapper";
import ContentWrapper from "./ContentWrapper";
import Heading from "./Heading";
import SearchBar from "../../SearchBar";
import UsersWrapper from "./UsersWrapper";
import User from "../../User";
import UsersIluWrapper from "./UsersIluWrapper";
import UsersIlu from "./UsersIlu";
import StyledLink from "../../../shared-styled-components/StyledLink";
import Loading from "../../../shared-styled-components/Loading";
import LoadingWrapper from "../../../shared-styled-components/LoadingWrapper";

//svg imports
import usersIlu from "../../../images/illustrations/users-ilu.svg";
import loadingIcon from "../../../images/loading.svg";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("/api/users");
      let usersFs = [];
      usersFs = response.data.map((user) => {
        return (
          <StyledLink key={user.id} to={`/profile/${user.id}`}>
            <User name={user.name} email={user.email} />
          </StyledLink>
        );
      });
      setUsers(usersFs);
      setLoading(false);
    };

    getUsers();
  }, []);

  const handleFilter = (e) => {
    setFilterText(e.target.value);
  };

  const renderUsers = () => {
    if (filterText === "") {
      return users;
    } else {
      const filteredUsers = users.filter((user) => {
        return (
          user.props.children.props.name.indexOf(filterText) !== -1 ||
          user.props.children.props.email.indexOf(filterText) !== -1
        );
      });
      if (Array.isArray(filteredUsers) && filteredUsers.length) {
        return filteredUsers;
      } else {
        return null;
      }
    }
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <Heading>Uživatelé</Heading>
        <SearchBar
          change={handleFilter}
          value={filterText}
          placeholder="Hledej uživatele"
        />
        <UsersWrapper>
          {loading ? (
            <LoadingWrapper>
              <Loading src={loadingIcon} />
            </LoadingWrapper>
          ) : (
            <>{renderUsers() || <p>Žádní uživatelé k zobrazení</p>} </>
          )}
        </UsersWrapper>
      </ContentWrapper>
      <Media query={`(${breakpoints.desktop})`}>
        {(matches) =>
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
