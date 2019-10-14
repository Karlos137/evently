import React, { useState, useEffect } from "react";

//react component import
import Wrapper from "./Wrapper";
import EventCard from "../../../../../EventCard";

const EventList = props => {
  const [heading, setHeading] = useState("");

  useEffect(() => {
    if (props.all) {
      setHeading("Všechny");
    } else if (props.upcoming) {
      setHeading("Nadcházející");
    }
  }, [props]);

  return (
    <Wrapper>
      <div>{heading}</div>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </Wrapper>
  );
};

export default EventList;
