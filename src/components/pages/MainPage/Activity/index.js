import React from "react";

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
      <UserImage src={props.image} width="64px" height="64px" />
      <TextWrapper>
        <ActivityInfo>{props.activity}</ActivityInfo>
        <EventName>{props.event}</EventName>
        <DateInfo>{props.date}</DateInfo>
      </TextWrapper>
    </Wrapper>
  );
};

export default Activity;
