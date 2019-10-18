import React from "react";
import Media from "react-media";
import { useSelector } from "react-redux";

//react components imports
import CreateGroupForm from "./CreateGroupForm";
import InviteUsersModal from "../../InviteUsersModal";

//styled components imports
import Wrapper from "./Wrapper";
import Heading from "./Heading";
import CreateGroupIlu from "./CreateGroupIlu";
import ContentWrapper from "./ContentWrapper";

//svg import
import createGroupIlu from "../../../images/illustrations/create-group-ilu.svg";

const CreateGroupPage = () => {
  const isInviteUsersOpen = useSelector(state => state.inviteUsersReducer);

  return (
    <Wrapper>
      <Media query="(min-width: 1024px)">
        {matches => (matches ? <CreateGroupIlu src={createGroupIlu} /> : null)}
      </Media>
      <ContentWrapper>
        <Heading>Vytvořit skupinu</Heading>
        <CreateGroupForm />
        {isInviteUsersOpen ? <InviteUsersModal /> : null}
      </ContentWrapper>
    </Wrapper>
  );
};

export default CreateGroupPage;
