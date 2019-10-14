import React from "react";
import { useSelector } from "react-redux";

//react component import
import CreateEventForm from "./CreateEventForm";
import InviteUsersModal from "./InviteUsersModal";
import InviteGroupsModal from "./InviteGroupsModal";

//styled components imports
import Wrapper from "./Wrapper";
import Heading from "./Heading";

const CreateEventPage = () => {
  const isInviteUsersOpen = useSelector(state => state.inviteUsersReducer);
  const isInviteGroupsOpen = useSelector(state => state.inviteGroupsReducer);

  return (
    <Wrapper>
      <Heading>Vytvořit událost</Heading>
      <CreateEventForm />
      {isInviteUsersOpen ? <InviteUsersModal /> : null}
      {isInviteGroupsOpen ? <InviteGroupsModal /> : null}
    </Wrapper>
  );
};

export default CreateEventPage;
