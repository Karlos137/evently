import React from "react";

import { useDispatch } from "react-redux";

//action import
import { closeInviteGroups } from "../../../../store/actions/inviteGroupsActions";

//react components imports
import SearchBar from "../../../SearchBar";
import Group from "../../../Group";

//styled components imports
import ModalWrapper from "../../../../shared-styled-components/ModalWrapper";
import Modal from "../../../../shared-styled-components/Modal";
import ModalTitle from "../../../../shared-styled-components/ModalTitle";
import ModalIconClose from "../../../../shared-styled-components/ModalCloseIcon";
import Button from "../../../../shared-styled-components/Button";

const InviteGroupsModal = () => {
  const dispatch = useDispatch();

  return (
    <ModalWrapper
      id="closeInviteGroups"
      onClick={e => {
        //only close when clicking on this element
        if (e.target.id === "closeInviteGroups") {
          dispatch(closeInviteGroups());
        }
      }}
    >
      <Modal>
        <ModalTitle>Pozvat skupiny</ModalTitle>
        <ModalIconClose
          onClick={() => {
            dispatch(closeInviteGroups());
          }}
        />
        <SearchBar modal placeholder="Hledej skupiny" />
        <Group modal invite name="Testing team" />
        <Group modal invite name="FunFunFun" />
        <Group modal invite name="Developers" />
        <Button>Hotovo</Button>
      </Modal>
    </ModalWrapper>
  );
};

export default InviteGroupsModal;
