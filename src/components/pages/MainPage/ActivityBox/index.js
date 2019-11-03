import React, { useState, useEffect } from "react";

import axios from "axios";

import { auth } from "../../../../firebase";

//react components imports
import Activity from "../Activity";

//styled components imports
import Wrapper from "./Wrapper";
import BoxWrapper from "./BoxWrapper";
import Heading from "./Heading";
import StyledLink from "../../../../shared-styled-components/StyledLink";

//svg import
import avatarMale from "../../../../images/avatar-male.svg";

const ActivityBox = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const getActivities = async () => {
      const response = await axios.get("/api/activities");
      let activitiesFs = [];

      //filter activities for current user
      activitiesFs = response.data.filter(activity => {
        return (
          activity.for === null || activity.for.includes(auth.currentUser.uid)
        );
      });

      activitiesFs = activitiesFs.map(activity => {
        const date = new Date(1000 * activity.date._seconds);
        if (activity.type === "create") {
          return (
            <StyledLink key={activity.id} to={`/event/${activity.event.id}`}>
              <Activity
                image={avatarMale}
                activity={activity.text}
                eventId={activity.event.id}
                eventName={activity.event.name}
                user={activity.user}
                date={`${date.getDate()}. ${date.getMonth()}. ${(date.getHours() <
                10
                  ? "0"
                  : "") + date.getHours()}:${(date.getMinutes() < 10
                  ? "0"
                  : "") + date.getMinutes()}`}
              />
            </StyledLink>
          );
        } else {
          return (
            <StyledLink
              key={activity.id}
              to={`/profile/${auth.currentUser.uid}`}
            >
              <Activity
                image={avatarMale}
                activity={activity.text}
                eventId={activity.event.id}
                eventName={activity.event.name}
                user={activity.user}
                date={`${date.getDate()}. ${date.getMonth()}. ${(date.getHours() <
                10
                  ? "0"
                  : "") + date.getHours()}:${(date.getMinutes() < 10
                  ? "0"
                  : "") + date.getMinutes()}`}
              />
            </StyledLink>
          );
        }
      });
      setActivities(activitiesFs);
    };

    getActivities();
  }, []);
  return (
    <Wrapper>
      <Heading>Aktivita</Heading>
      <BoxWrapper>{activities}</BoxWrapper>
    </Wrapper>
  );
};

export default ActivityBox;
