import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
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

const DesktopNavbar = () => {
  const [redirect, setRedirect] = useState("");
  const renderRedirect = link => {
    return <Redirect to={link} />;
  };
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo
          onClick={() => {
            setRedirect("/main");
          }}
        />
      </LogoWrapper>
      <NavLinks>
        <NavLink
          onClick={() => {
            setRedirect("/create-event");
          }}
        >
          Vytvořit událost
        </NavLink>
        <NavLink
          onClick={() => {
            setRedirect("/create-group");
          }}
        >
          Vytvořit skupinu
        </NavLink>
        <NavLink
          onClick={() => {
            setRedirect("/users");
          }}
        >
          Uživatelé
        </NavLink>
        <NavLink
          onClick={() => {
            setRedirect("/groups");
          }}
        >
          Skupiny
        </NavLink>
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
      <UserProfile
        src={avatarMale}
        onClick={() => {
          setRedirect("/profile/1");
        }}
      />
      {redirect ? renderRedirect(redirect) : null}
    </Wrapper>
  );
};

export default DesktopNavbar;
