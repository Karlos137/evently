import React, { useState } from "react";

//styled components imports
import Wrapper from "./Wrapper";
import TextWrapper from "./TextWrapper";
import Name from "./Name";
import Email from "./Email";
import UserImage from "../../shared-styled-components/UserImage";
import InviteWrapper from "./InviteWrapper";
import PlusIcon from "../../shared-styled-components/PlusIcon";
import CheckIcon from "../../shared-styled-components/CheckIcon";

//svg import
import avatarMale from "../../images/avatar-male.svg";

const User = props => {
  const [invited, setInvited] = useState(false);

  //toggle invited
  const handleClick = () => {
    setInvited(!invited);
  };

  return (
    <Wrapper>
      <UserImage src={avatarMale} />
      <TextWrapper>
        <Name>{props.name}</Name>
        <Email>{props.email}</Email>
      </TextWrapper>
      <InviteWrapper onClick={handleClick}>
        {props.invite ? invited ? <CheckIcon /> : <PlusIcon /> : null}
      </InviteWrapper>
    </Wrapper>
  );
};

export default User;
