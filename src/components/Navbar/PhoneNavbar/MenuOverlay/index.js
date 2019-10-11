import React from "react";

//styled components imports
import Wrapper from "./Wrapper";
import MenuItem from "./MenuItem";

const MenuOverlay = () => {
  return (
    <Wrapper>
      <MenuItem>Vytvořit událost</MenuItem>
      <MenuItem>Vytvořit skupinu</MenuItem>
      <MenuItem>Uživatelé</MenuItem>
      <MenuItem>Skupiny</MenuItem>
      <MenuItem>Odhlásit se</MenuItem>
    </Wrapper>
  );
};

export default MenuOverlay;
