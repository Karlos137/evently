import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { auth } from "../../../firebase";

//react components imports
import Tabs from "./Tabs";
import Invitation from "./Invitation";

//svg imports
import avatarMale from "../../../images/avatar-male.svg";
import loadingIcon from "../../../images/loading.svg";

//styled components imports
import Avatar from "./Avatar";
import Name from "./Name";
import Email from "./Email";
import Loading from "../../../shared-styled-components/Loading";
import LoadingWrapper from "../../../shared-styled-components/LoadingWrapper";
import Invitations from "./Invitations";
import Heading from "./Heading";
import SectionHeading from "./SectionHeading";

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [owner, setOwner] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`/api/user/${id}`);
      setUser(response.data);
      setLoading(false);
      if (auth.currentUser.uid === id) {
        setOwner(true);
      }
    };

    getUser();
  }, [id]);
  return (
    <>
      {loading ? (
        <LoadingWrapper>
          <Loading src={loadingIcon} />
        </LoadingWrapper>
      ) : (
        <>
          <Avatar src={avatarMale} />
          <Name>{user.name}</Name>
          <Email>{user.email}</Email>
          {owner ? (
            (Array.isArray(user.groupsInvitations) &&
              user.groupsInvitations.length) ||
            (Array.isArray(user.eventsInvitations) &&
              user.eventsInvitations.length) ? (
              <Invitations>
                <Heading>Pozvánky</Heading>

                {Array.isArray(user.groupsInvitations) &&
                user.groupsInvitations.length ? (
                  <>
                    <SectionHeading>Skupiny</SectionHeading>
                    {user.groupsInvitations.map(invitation => {
                      return (
                        <Invitation
                          key={invitation.id}
                          id={invitation.id}
                          type="group"
                          name={invitation.name}
                        />
                      );
                    })}
                  </>
                ) : null}
                {Array.isArray(user.eventsInvitations) &&
                user.eventsInvitations.length ? (
                  <>
                    <SectionHeading>Události</SectionHeading>
                    {user.eventsInvitations.map(invitation => {
                      return (
                        <Invitation
                          key={invitation.id}
                          id={invitation.id}
                          type="event"
                          name={invitation.name}
                        />
                      );
                    })}
                  </>
                ) : null}
              </Invitations>
            ) : (
              <></>
            )
          ) : null}
          <Tabs />
        </>
      )}
    </>
  );
};

export default ProfilePage;
