import React, { useState, useEffect } from "react";
import { auth } from "../../../../../../firebase";

import axios from "axios";

//react component import
import EventCard from "../../../../../EventCard";

//styled components import
import Loading from "./Loading";
import LoadingWrapper from "./LoadingWrapper";
import Wrapper from "./Wrapper";

//import loading svg
import loadingIcon from "../../../../../../images/loading.svg";

const EventList = (props) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleResponse = (response) => {
    if (
      Object.entries(response.data).length === 0 &&
      response.data.constructor === Object
    ) {
      setEvents([]);
    } else {
      let eventsFs = response.data.map((event) => {
        const [dayOfMonth, month] = convertFsDate(event.date._seconds);
        return (
          <EventCard
            key={event.id}
            id={event.id}
            name={event.name}
            month={month}
            dayOfMonth={dayOfMonth}
            users={event.users}
            image={event.image}
          />
        );
      });
      setEvents(eventsFs);
    }
    setLoading(false);
  };

  //to convert date from Firestore
  const convertFsDate = (fsDate) => {
    //date from seconds
    const date = new Date(1000 * fsDate);

    let month = "";
    let dayOfMonth = "";

    //set month name
    switch (date.getMonth()) {
      case 0:
        month = "LED";
        break;
      case 1:
        month = "ÚNO";
        break;
      case 2:
        month = "BŘE";
        break;
      case 3:
        month = "DUB";
        break;
      case 4:
        month = "KVĚ";
        break;
      case 5:
        month = "ČVN";
        break;
      case 6:
        month = "ČVC";
        break;
      case 7:
        month = "SRP";
        break;
      case 8:
        month = "ZÁŘ";
        break;
      case 9:
        month = "ŘÍJ";
        break;
      case 10:
        month = "LIS";
        break;
      case 11:
        month = "PRO";
        break;
      default:
        month = "IDK";
    }

    //set day of month
    dayOfMonth = date.getDate();

    return [dayOfMonth, month];
  };

  useEffect(() => {
    setEvents([]);
    setLoading(true);
    const getEvents = async () => {
      if (props.upcoming) {
        const response = await axios.get("/api/events/upcoming");
        handleResponse(response);
      }

      if (props.past) {
        const response = await axios.get("/api/events/past");
        handleResponse(response);
      }

      if (props.created) {
        const response = await axios.post("/api/events/created", {
          id: auth.currentUser.uid,
        });
        handleResponse(response);
      }

      if (props.all) {
        const response = await axios.get("/api/events");
        handleResponse(response);
      }
    };
    getEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  return (
    <Wrapper>
      {loading ? (
        <LoadingWrapper>
          <Loading src={loadingIcon} />
        </LoadingWrapper>
      ) : Array.isArray(events) && events.length ? (
        events
      ) : (
        <p>Žádné události k zobrazení.</p>
      )}
    </Wrapper>
  );
};

export default EventList;
