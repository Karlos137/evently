import React, { useEffect } from "react";

//react component import
import Wrapper from "./Wrapper";
import EventCard from "../../../../../EventCard";

const EventList = props => {
  useEffect(() => {
    //show content based on props - TODO
  }, [props]);

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
