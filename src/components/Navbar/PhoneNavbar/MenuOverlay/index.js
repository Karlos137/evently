import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

//action import
import { closeMenu } from "../../../../store/actions/menuActions";
import { signOut } from "../../../../store/actions/userActions";

//firebase import
import { auth } from "../../../../firebase";

//styled components imports
import Wrapper from "./Wrapper";
import MenuItem from "./MenuItem";

const MenuOverlay = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Wrapper
      onClick={() => {
        dispatch(closeMenu());
      }}
    >
      <MenuItem to="/create-event">Vytvořit událost</MenuItem>
      <MenuItem to="/create-group">Vytvořit skupinu</MenuItem>
      <MenuItem to="/users">Uživatelé</MenuItem>
      <MenuItem to="/groups">Skupiny</MenuItem>
      <MenuItem
        onClick={() => {
          auth.signOut();
          dispatch(signOut());
          history.push("/");
        }}
      >
        Odhlásit se
      </MenuItem>
    </Wrapper>
  );
};

export default MenuOverlay;
