import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";

//firebase auth import
import { auth } from "../../../firebase";

//actions imports
import { openMenu, closeMenu } from "../../../store/actions/menuActions";

//styled components imports
import Wrapper from "./Wrapper";
import LogoIconWrapper from "./LogoIconWrapper";
import HamburgerMenuIcon from "./HamburgerMenuIcon";
import UserProfile from "../../../shared-styled-components/UserProfile";
import CloseIcon from "../../../shared-styled-components/CloseIcon";

//react component import
import MenuOverlay from "./MenuOverlay";

//svg imports
import { ReactComponent as LogoIcon } from "../../../images/logo-icon.svg";
import avatarMale from "../../../images/avatar-male.svg";

const PhoneNavbar = () => {
  const [redirect, setRedirect] = useState("");
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menuReducer);

  const renderRedirect = (link) => {
    return <Redirect to={link} />;
  };

  return (
    <>
      <Wrapper>
        {isMenuOpen ? (
          <CloseIcon
            onClick={() => {
              dispatch(closeMenu());
            }}
          />
        ) : (
          <HamburgerMenuIcon
            onClick={() => {
              dispatch(openMenu());
            }}
          />
        )}

        <LogoIconWrapper>
          <LogoIcon
            onClick={() => {
              dispatch(closeMenu());
              setRedirect("/main");
            }}
          />
        </LogoIconWrapper>
        <UserProfile
          src={avatarMale}
          onClick={() => {
            dispatch(closeMenu());
            setRedirect(`/profile/${auth.currentUser.uid}`);
          }}
        />
      </Wrapper>
      {isMenuOpen ? <MenuOverlay /> : null}
      {redirect ? renderRedirect(redirect) : null}
    </>
  );
};

export default PhoneNavbar;
