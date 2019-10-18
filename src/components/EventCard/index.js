import React from "react";

//jpeg import
import mauritius from "../../images/mauritius.jpeg";

//svg import
import avatarMale from "../../images/avatar-male.svg";

//styled components imports
import Wrapper from "./Wrapper";
import DateInfo from "./DateInfo";
import Day from "./Day";
import Month from "./Month";
import Name from "./Name";
import Users from "./Users";
import UserImage from "./UserImage";
import TextMore from "./TextMore";

const EventCard = () => {
  return (
    <Wrapper image={mauritius}>
      <DateInfo>
        <Day>27</Day>
        <Month>LIS</Month>
      </DateInfo>
      <Name>Výlet na Mauricius</Name>
      <Users>
        <UserImage src={avatarMale} />
        <UserImage src={avatarMale} />
        <UserImage src={avatarMale} />
      </Users>
      <TextMore>+12</TextMore>
    </Wrapper>
  );
};

export default EventCard;
