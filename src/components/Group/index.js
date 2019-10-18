import React, { useState } from "react";

//styled components imports
import Wrapper from "./Wrapper";
import Name from "./Name";
import InviteWrapper from "./InviteWrapper";
import PlusIcon from "../../shared-styled-components/PlusIcon";
import CheckIcon from "../../shared-styled-components/CheckIcon";

const Group = props => {
  const [invited, setInvited] = useState(false);

  //toggle invited
  const handleClick = () => {
    setInvited(!invited);
  };

  return (
    <Wrapper modal={props.modal}>
      <Name>{props.name}</Name>
      <InviteWrapper onClick={handleClick}>
        {props.invite ? invited ? <CheckIcon /> : <PlusIcon /> : null}
      </InviteWrapper>
    </Wrapper>
  );
};

export default Group;
