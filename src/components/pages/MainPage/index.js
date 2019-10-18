import React from "react";
import Media from "react-media";

//react components imports
import Events from "./Events";
import ActivityBox from "./ActivityBox";

//styled component import
import Wrapper from "./Wrapper";

const MainPage = () => {
  return (
    <Wrapper>
      <Events />
      <Media query="(min-width: 1024px)">
        {matches => (matches ? <ActivityBox /> : null)}
      </Media>
    </Wrapper>
  );
};

export default MainPage;
