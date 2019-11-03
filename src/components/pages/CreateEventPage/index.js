import React from "react";
import Media from "react-media";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

//react component import
import CreateEventForm from "./CreateEventForm";
import InviteUsersModal from "../../InviteUsersModal";
import InviteGroupsModal from "./InviteGroupsModal";

//styled components imports
import Wrapper from "./Wrapper";
import Heading from "./Heading";
import ContentWrapper from "./ContentWrapper";
import CreateEventIlu from "./CreateEventIlu";

//svg import
import createEventIlu from "../../../images/illustrations/create-event-ilu.svg";

const CreateEventPage = () => {
  const isInviteUsersOpen = useSelector(state => state.inviteUsersReducer);
  const isInviteGroupsOpen = useSelector(state => state.inviteGroupsReducer);

  const location = useLocation();

  return (
    <Wrapper>
      <Media query="(min-width: 1024px)">
        {matches => (matches ? <CreateEventIlu src={createEventIlu} /> : null)}
      </Media>
      <ContentWrapper>
        <Heading>
          {location.state ? "Upravit událost" : "Vytvořit událost"}
        </Heading>
        <CreateEventForm />
        {isInviteUsersOpen ? <InviteUsersModal event /> : null}
        {isInviteGroupsOpen ? <InviteGroupsModal /> : null}
      </ContentWrapper>
    </Wrapper>
  );
};

export default CreateEventPage;
