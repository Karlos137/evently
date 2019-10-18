import React from "react";

import { useDispatch } from "react-redux";

//action import
import { closeInviteUsers } from "../../store/actions/inviteUsersActions";

//react components imports
import SearchBar from "../SearchBar";
import User from "../User";

//styled components imports
import ModalWrapper from "../../shared-styled-components/ModalWrapper";
import Modal from "../../shared-styled-components/Modal";
import ModalTitle from "../../shared-styled-components/ModalTitle";
import ModalIconClose from "../../shared-styled-components/ModalCloseIcon";
import RecommendedTitle from "./RecommendedTitle";
import Button from "../../shared-styled-components/Button";

const InviteUsersModal = () => {
  const dispatch = useDispatch();

  return (
    <ModalWrapper
      id="closeInviteUsers"
      onClick={e => {
        //only close when clicking on this element
        if (e.target.id === "closeInviteUsers") {
          dispatch(closeInviteUsers());
        }
      }}
    >
      <Modal>
        <ModalTitle>Pozvat uživatele</ModalTitle>
        <ModalIconClose
          onClick={() => {
            dispatch(closeInviteUsers());
          }}
        />
        <SearchBar modal placeholder="Hledej uživatele" />
        <User modal invite name="Gordon Freeman" email="half@life.com" />
        <User modal invite name="Lara Croft" email="lara@mail.com" />
        <RecommendedTitle>Doporučení</RecommendedTitle>
        <User modal invite name="Kratos" email="godofwar@gg.com" />
        <Button marginTop="32px">Hotovo</Button>
      </Modal>
    </ModalWrapper>
  );
};

export default InviteUsersModal;
