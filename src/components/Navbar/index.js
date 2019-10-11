import React from "react";

//react-media import
import Media from "react-media";

//react components imports
import PhoneNavbar from "./PhoneNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
  return (
    <>
      <Media query="(min-width: 1200px)">
        {matches => (matches ? <DesktopNavbar /> : <PhoneNavbar />)}
      </Media>
    </>
  );
};

export default Navbar;
