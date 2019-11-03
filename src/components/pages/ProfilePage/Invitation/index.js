import React, { useState } from "react";

import axios from "axios";

import { auth } from "../../../../firebase";

//styled components imports
import Wrapper from "./Wrapper";
import Name from "./Name";
import Icons from "./Icons";
import CheckIcon from "./CheckIcon";
import CloseIcon from "../../../../shared-styled-components/CloseIcon";

const Invitation = props => {
  const [disabled, setDisabled] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleCheckClick = async () => {
    setDisabled(true);
    setAccepted(true);
    if (props.type === "group") {
      await axios.patch("/api/invitation/group/accept", {
        userId: auth.currentUser.uid,
        group: { id: props.id, name: props.name }
      });
    }
    if (props.type === "event") {
      await axios.patch("/api/invitation/event/accept", {
        userId: auth.currentUser.uid,
        event: { id: props.id, name: props.name }
      });
    }
  };

  const handleCloseClick = async () => {
    setDisabled(true);
    if (props.type === "group") {
      await axios.patch("/api/invitation/group/decline", {
        userId: auth.currentUser.uid,
        group: { id: props.id, name: props.name }
      });
    }
    if (props.type === "event") {
      await axios.patch("/api/invitation/event/decline", {
        userId: auth.currentUser.uid,
        event: { id: props.id, name: props.name }
      });
    }
  };

  return (
    <Wrapper disabled={disabled} accepted={accepted}>
      <Name>{props.name}</Name>
      <Icons>
        <CheckIcon onClick={handleCheckClick} />
        <CloseIcon onClick={handleCloseClick} color="red" />
      </Icons>
    </Wrapper>
  );
};

export default Invitation;
