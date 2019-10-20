import React from "react";
import { useHistory } from "react-router-dom";

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
import UserImage from "../../shared-styled-components/UserImage";
import TextMore from "./TextMore";

const EventCard = () => {
  const history = useHistory();
  return (
    <Wrapper
      image={mauritius}
      onClick={() => {
        history.push("/event/1");
      }}
    >
      <DateInfo>
        <Day>27</Day>
        <Month>LIS</Month>
      </DateInfo>
      <Name>Výlet na Mauricius</Name>
      <Users>
        <UserImage small src={avatarMale} />
        <UserImage small src={avatarMale} />
        <UserImage small src={avatarMale} />
      </Users>
      <TextMore>+12</TextMore>
    </Wrapper>
  );
};

export default EventCard;
