import React from "react";
import { useDispatch } from "react-redux";

//action import
import { closeMenu } from "../../../../store/actions/menuActions";

//styled components imports
import Wrapper from "./Wrapper";
import MenuItem from "./MenuItem";

const MenuOverlay = () => {
  const dispatch = useDispatch();

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
      <MenuItem>Odhlásit se</MenuItem>
    </Wrapper>
  );
};

export default MenuOverlay;
