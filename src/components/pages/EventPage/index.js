import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import axios from "axios";

import { auth } from "../../../firebase";

//action import
import { openDelete } from "../../../store/actions/deleteActions";

//react component import
import DeleteModal from "../../DeleteModal";

//styled components imports
import Image from "./Image";
import ContentWrapper from "./ContentWrapper";
import EventInfo from "./EventInfo";
import Name from "./Name";
import Icons from "./Icons";
import EditIcon from "../../../shared-styled-components/EditIcon";
import DeleteIcon from "../../../shared-styled-components/DeleteIcon";
import DateWrapper from "./DateWrapper";
import CalendarIcon from "./CalendarIcon";
import DateInfo from "./DateInfo";
import Time from "./Time";
import PlaceWrapper from "./PlaceWrapper";
import LocationIcon from "./LocationIcon";
import Location from "./Location";
import City from "./City";
import Users from "./Users";
import UserImage from "../../../shared-styled-components/UserImage";
import TextMore from "./TextMore";
import Description from "./Description";

//import images
import avatarMale from "../../../images/avatar-male.svg";

const EventPage = () => {
  const isDeleteOpen = useSelector(state => state.deleteReducer);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  const [owner, setOwner] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/event/${id}`);
      if (response.data.createdBy === auth.currentUser.uid) {
        setOwner(true);
      }
      const date = new Date(1000 * response.data.date._seconds);
      let eventFs = response.data;

      eventFs.dateInfo = `${date.getDate()}. ${date.getMonth()}. ${date.getFullYear()}`;
      eventFs.dateToForm = `${date.getFullYear()}-${
        date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
      }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
      eventFs.time = `${(date.getHours() < 10 ? "0" : "") +
        date.getHours()}:${(date.getMinutes() < 10 ? "0" : "") +
        date.getMinutes()}`;
      setEvent(response.data);
      setLoading(false);
    };

    getData();
  }, [id]);
  return (
    <>
      {loading ? (
        <></>
      ) : (
        <>
          <Image image={event.image} />
          <ContentWrapper>
            <EventInfo>
              <Name>{event.name}</Name>
              {owner ? (
                <Icons>
                  <Link
                    to={{
                      pathname: "/create-event",
                      state: {
                        id: id,
                        name: event.name,
                        date: event.dateToForm,
                        time: event.time,
                        description: event.description,
                        users: event.users,
                        place: event.location
                      }
                    }}
                  >
                    <EditIcon />
                  </Link>
                  <DeleteIcon
                    onClick={() => {
                      dispatch(openDelete());
                    }}
                  />
                </Icons>
              ) : null}

              <DateWrapper>
                <CalendarIcon />
                <div>
                  <DateInfo>{event.dateInfo}</DateInfo>
                  <Time>{event.time}</Time>
                </div>
              </DateWrapper>
              <PlaceWrapper>
                <LocationIcon />
                <div>
                  <Location>{event.location}</Location>
                  <City></City>
                </div>
              </PlaceWrapper>
              <Users>
                {event.users.map((user, index) => {
                  if (index < 3) {
                    return (
                      <Link key={user} to={`/profile/${user}`}>
                        <UserImage small src={avatarMale} />
                      </Link>
                    );
                  } else {
                    return null;
                  }
                })}
                {event.users.length > 3 ? (
                  <TextMore>+ {event.users.length - 3}</TextMore>
                ) : null}
              </Users>
            </EventInfo>
            <Description>{event.description}</Description>
          </ContentWrapper>
          {isDeleteOpen ? <DeleteModal event id={id} /> : null}
        </>
      )}
    </>
  );
};

export default EventPage;
