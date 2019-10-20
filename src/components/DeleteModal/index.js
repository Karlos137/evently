import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//action import
import { closeDelete } from "../../store/actions/deleteActions";

//styled components imports
import ModalWrapper from "../../shared-styled-components/ModalWrapper";
import Modal from "../../shared-styled-components/Modal";
import ModalTitle from "../../shared-styled-components/ModalTitle";
import ModalCloseIcon from "../../shared-styled-components/ModalCloseIcon";
import Text from "./Text";
import Button from "../../shared-styled-components/Button";

const DeleteModal = props => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleButtonClick = () => {
    dispatch(closeDelete());
    history.push("/main");
  };
  return (
    <ModalWrapper
      id="close"
      onClick={e => {
        //only close when clicking on this element
        if (e.target.id === "close") {
          dispatch(closeDelete());
        }
      }}
    >
      <Modal>
        <ModalTitle>Opravdu smazat?</ModalTitle>
        <ModalCloseIcon
          onClick={() => {
            dispatch(closeDelete());
          }}
        />
        <Text>
          Opravdu si přeješ smazat tuto {props.group ? "skupinu" : "událost"}?
        </Text>
        <Button red onClick={handleButtonClick}>
          Ano
        </Button>
      </Modal>
    </ModalWrapper>
  );
};

export default DeleteModal;
