import React from "react";

import mauritius from "../../images/mauritius.jpeg";

//styled components imports
import Wrapper from "./Wrapper";
import DateInfo from "./DateInfo";
import Day from "./Day";
import Month from "./Month";
import Name from "./Name";

const EventCard = () => {
  return (
    <Wrapper image={mauritius}>
      <DateInfo>
        <Day>27</Day>
        <Month>LIS</Month>
      </DateInfo>
      <Name>Výlet na Mauricius</Name>
    </Wrapper>
  );
};

export default EventCard;
