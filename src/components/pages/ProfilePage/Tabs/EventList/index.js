import React from "react";

//react component import
import EventCard from "../../../../EventCard";

//styled component import
import Wrapper from "./Wrapper";

const EventList = () => {
  return (
    <Wrapper>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </Wrapper>
  );
};

export default EventList;
