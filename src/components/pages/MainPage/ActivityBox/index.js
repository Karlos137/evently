import React from "react";

//react components imports
import Activity from "../Activity";

//styled components imports
import Wrapper from "./Wrapper";
import BoxWrapper from "./BoxWrapper";
import Heading from "./Heading";

//svg import
import avatarMale from "../../../../images/avatar-male.svg";

const ActivityBox = () => {
  return (
    <Wrapper>
      <Heading>Aktivita</Heading>
      <BoxWrapper>
        <Activity
          image={avatarMale}
          activity="Gordon Freeman vytvořil/a událost!"
          event="Výlet na Mauricius"
          date="Dnes 12:11"
        />
        <Activity
          image={avatarMale}
          activity="Ellie tě pozval/a na událost!"
          event="Teambuilding Thajsko"
          date="Včera 17:17"
        />
      </BoxWrapper>
    </Wrapper>
  );
};

export default ActivityBox;
