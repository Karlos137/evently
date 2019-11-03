import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

//action import
import { signOut } from "../../../store/actions/userActions";

//firebase import
import { auth } from "../../../firebase";

//svg imports
import { ReactComponent as Logo } from "../../../images/logo-horizontal.svg";
import avatarMale from "../../../images/avatar-male.svg";

//styled components import
import Wrapper from "./Wrapper";
import LogoWrapper from "./LogoWrapper";
import UserProfile from "../../../shared-styled-components/UserProfile";
import NavLinks from "./NavLinks";
import NavLink from "./NavLink";
import StyledLink from "../../../shared-styled-components/StyledLink";

const DesktopNavbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Wrapper>
      <StyledLink to="/main">
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </StyledLink>
      <NavLinks>
        <StyledLink to="/create-event">
          <NavLink>Vytvořit událost</NavLink>
        </StyledLink>
        <StyledLink to="/create-group">
          <NavLink>Vytvořit skupinu</NavLink>
        </StyledLink>
        <StyledLink to="/users">
          <NavLink>Uživatelé</NavLink>
        </StyledLink>
        <StyledLink to="/groups">
          <NavLink>Skupiny</NavLink>
        </StyledLink>
        <NavLink
          onClick={() => {
            auth.signOut();
            dispatch(signOut());
            history.push("/");
          }}
        >
          Odhlásit se
        </NavLink>
      </NavLinks>
      <StyledLink to={`/profile/${auth.currentUser.uid}`}>
        <UserProfile src={avatarMale} />
      </StyledLink>
    </Wrapper>
  );
};

export default DesktopNavbar;
