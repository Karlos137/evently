import React, { useState } from "react";
import { useDispatch } from "react-redux";

//actions imports
import {
  addGroupUser,
  removeGroupUser
} from "../../store/actions/groupInvitedUsersActions";
import {
  addEventUser,
  removeEventUser
} from "../../store/actions/eventInvitedUsersActions";

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
  const dispatch = useDispatch();

  //toggle invited & add/remove user to/from invite
  const handleClick = () => {
    setInvited(!invited);
    if (props.group) {
      if (invited === true) {
        dispatch(removeGroupUser({ id: props.id, name: props.name }));
      } else {
        dispatch(addGroupUser({ id: props.id, name: props.name }));
      }
    }
    if (props.event) {
      if (invited === true) {
        dispatch(removeEventUser({ id: props.id, name: props.name }));
      } else {
        dispatch(addEventUser({ id: props.id, name: props.name }));
      }
    }
  };

  return (
    <Wrapper modal={props.modal}>
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
