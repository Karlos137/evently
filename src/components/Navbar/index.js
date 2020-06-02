import React from "react";

import { breakpoints } from "../../utils/responsiveHelpers";

//react-media import
import Media from "react-media";

//react components imports
import PhoneNavbar from "./PhoneNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
  return (
    <>
      <Media query={`(${breakpoints.largeDesktop})`}>
        {(matches) => (matches ? <DesktopNavbar /> : <PhoneNavbar />)}
      </Media>
    </>
  );
};

export default Navbar;
