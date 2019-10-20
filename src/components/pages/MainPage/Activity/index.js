import React from "react";
import { Link } from "react-router-dom";

//styled components imports
import Wrapper from "./Wrapper";
import UserImage from "../../../../shared-styled-components/UserImage";
import TextWrapper from "./TextWrapper";
import ActivityInfo from "./ActivityInfo";
import EventName from "./EventName";
import DateInfo from "./DateInfo";

const Activity = props => {
  return (
    <Wrapper>
      <Link to="/profile/1">
        <UserImage src={props.image} width="64px" height="64px" />
      </Link>
      <TextWrapper>
        <ActivityInfo>{props.activity}</ActivityInfo>
        <EventName>{props.event}</EventName>
        <DateInfo>{props.date}</DateInfo>
      </TextWrapper>
    </Wrapper>
  );
};

export default Activity;
