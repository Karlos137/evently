import React from "react";

//svg imports
import { ReactComponent as Logo } from "../../../images/logo-horizontal.svg";
import avatarMale from "../../../images/avatar-male.svg";

//styled components import
import Wrapper from "./Wrapper";
import UserProfile from "../../../shared-styled-components/UserProfile";
import NavLinks from "./NavLinks";
import NavLink from "./NavLink";

const DesktopNavbar = () => {
  return (
    <Wrapper>
      <Logo />
      <NavLinks>
        <NavLink>Vytvořit událost</NavLink>
        <NavLink>Vytvořit skupinu</NavLink>
        <NavLink>Uživatelé</NavLink>
        <NavLink>Skupiny</NavLink>
        <NavLink>Odhlásit se</NavLink>
      </NavLinks>
      <UserProfile src={avatarMale} />
    </Wrapper>
  );
};

export default DesktopNavbar;
