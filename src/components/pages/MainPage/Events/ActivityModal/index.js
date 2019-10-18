import React from "react";
import { useDispatch } from "react-redux";

//action import
import { closeActivity } from "../../../../../store/actions/activityActions";

//react component import
import Activity from "../../Activity";

//styled components imports
import ModalWrapper from "../../../../../shared-styled-components/ModalWrapper";
import Modal from "../../../../../shared-styled-components/Modal";
import ModalTitle from "../../../../../shared-styled-components/ModalTitle";
import ModalCloseIcon from "../../../../../shared-styled-components/ModalCloseIcon";

//svg import
import avatarMale from "../../../../../images/avatar-male.svg";

const ActivityModal = () => {
  const dispatch = useDispatch();
  return (
    <ModalWrapper
      id="close"
      onClick={e => {
        //only close when clicking on this element
        if (e.target.id === "close") {
          dispatch(closeActivity());
        }
      }}
    >
      <Modal>
        <ModalTitle>Aktivita</ModalTitle>
        <ModalCloseIcon
          onClick={() => {
            dispatch(closeActivity());
          }}
        />
        <Activity
          image={avatarMale}
          activity="Gordon Freeman vytvořil/a událost!"
          event="Výlet na Mauricius"
          date="Dnes 12:11"
        />
        <Activity
          image={avatarMale}
          activity="Ellie tě pozval/a na událost!"
          event="Teambuilding Thajsko"
          date="Včera 17:17"
        />
      </Modal>
    </ModalWrapper>
  );
};

export default ActivityModal;
