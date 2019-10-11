import React from "react";

//SVG import
import { ReactComponent as Logo } from "../../../../images/logo-vertical.svg";

//styled-components imports
import Wrapper from "./Wrapper";
import Text from "./Text";

const LogoHeader = () => {
  return (
    <Wrapper>
      <Logo />
      <Text>Webová aplikace pro vytváření událostí</Text>
    </Wrapper>
  );
};

export default LogoHeader;
