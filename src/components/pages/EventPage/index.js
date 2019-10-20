import React from "react";
import { Link } from "react-router-dom";

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
import mauritius from "../../../images/mauritius.jpeg";
import avatarMale from "../../../images/avatar-male.svg";

const EventPage = () => {
  return (
    <>
      <Image image={mauritius} />
      <ContentWrapper>
        <EventInfo>
          <Name>Výlet na Mauricius</Name>
          <Icons>
            <EditIcon />
            <DeleteIcon />
          </Icons>
          <DateWrapper>
            <CalendarIcon />
            <div>
              <DateInfo>27. Listopadu 2019</DateInfo>
              <Time>9:00</Time>
            </div>
          </DateWrapper>
          <PlaceWrapper>
            <LocationIcon />
            <div>
              <Location>Letiště Václava Havla</Location>
              <City>Praha 6</City>
            </div>
          </PlaceWrapper>
          <Users>
            <Link to="/profile/1">
              <UserImage small src={avatarMale} />
            </Link>
            <Link to="/profile/1">
              <UserImage small src={avatarMale} />
            </Link>
            <Link to="/profile/1">
              <UserImage small src={avatarMale} />
            </Link>
            <TextMore>+12</TextMore>
          </Users>
        </EventInfo>
        <Description>Výlet do Afriky!</Description>
      </ContentWrapper>
    </>
  );
};

export default EventPage;