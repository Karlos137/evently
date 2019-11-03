import React from "react";
import { useHistory } from "react-router-dom";

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

const EventCard = props => {
  const history = useHistory();

  return (
    <Wrapper
      image={props.image}
      onClick={() => {
        history.push(`/event/${props.id}`);
      }}
    >
      <DateInfo>
        <Day>{props.dayOfMonth}</Day>
        <Month>{props.month}</Month>
      </DateInfo>
      <Name>{props.name}</Name>
      <Users>
        {props.users.map((user, index) => {
          if (index < 3) {
            return <UserImage key={user} small src={avatarMale} />;
          } else {
            return null;
          }
        })}
      </Users>
      {props.users.length > 3 ? (
        <TextMore>+ {props.users.length - 3}</TextMore>
      ) : null}
    </Wrapper>
  );
};

export default EventCard;
