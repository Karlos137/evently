import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import axios from "axios";

import { auth } from "../../../../../firebase";

//action import
import { closeActivity } from "../../../../../store/actions/activityActions";

//react component import
import Activity from "../../Activity";

//styled components imports
import ModalWrapper from "../../../../../shared-styled-components/ModalWrapper";
import Modal from "../../../../../shared-styled-components/Modal";
import ModalTitle from "../../../../../shared-styled-components/ModalTitle";
import ModalCloseIcon from "../../../../../shared-styled-components/ModalCloseIcon";
import StyledLink from "../../../../../shared-styled-components/StyledLink";

//svg import
import avatarMale from "../../../../../images/avatar-male.svg";

const ActivityModal = () => {
  const [activities, setActivities] = useState([]);
  const dispatch = useDispatch();

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
    <ModalWrapper
      id="close"
      onClick={e => {
        //only close when clicking on this element
        if (e.target.id === "close") {
          dispatch(closeActivity());
        }
      }}
    >
      <Modal>
        <ModalTitle>Aktivita</ModalTitle>
        <ModalCloseIcon
          onClick={() => {
            dispatch(closeActivity());
          }}
        />
        {activities}
      </Modal>
    </ModalWrapper>
  );
};

export default ActivityModal;
