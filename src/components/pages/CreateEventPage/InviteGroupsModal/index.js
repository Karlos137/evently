import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import axios from "axios";

//actions imports
import { closeInviteGroups } from "../../../../store/actions/inviteGroupsActions";
import { removeEventUsers } from "../../../../store/actions/eventInvitedUsersActions";

//import svg
import loadingIcon from "../../../../images/loading.svg";

//react components imports
import SearchBar from "../../../SearchBar";
import Group from "../../../Group";

//styled components imports
import ModalWrapper from "../../../../shared-styled-components/ModalWrapper";
import Modal from "../../../../shared-styled-components/Modal";
import ModalTitle from "../../../../shared-styled-components/ModalTitle";
import ModalIconClose from "../../../../shared-styled-components/ModalCloseIcon";
import Button from "../../../../shared-styled-components/Button";
import Text from "./Text";
import Loading from "../../../../shared-styled-components/Loading";
import LoadingWrapper from "../../../../shared-styled-components/LoadingWrapper";

const InviteGroupsModal = () => {
  const dispatch = useDispatch();
  const [groups, setGroups] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGroups = async () => {
      const response = await axios.get("/api/groups");
      let groupsFs = [];
      groupsFs = response.data.map(group => {
        return (
          <Group
            key={group.id}
            id={group.id}
            users={group.users}
            modal
            invite
            name={group.name}
          />
        );
      });
      setGroups(groupsFs);
      setLoading(false);
    };
    dispatch(removeEventUsers());
    getGroups();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilter = e => {
    setFilterText(e.target.value);
  };

  const renderGroups = () => {
    if (filterText === "") {
      return groups;
    } else {
      const filteredGroups = groups.filter(group => {
        return group.props.name.indexOf(filterText) !== -1;
      });
      if (Array.isArray(filteredGroups) && filteredGroups.length) {
        return filteredGroups;
      } else {
        return null;
      }
    }
  };

  return (
    <ModalWrapper
      id="closeInviteGroups"
      onClick={e => {
        //only close when clicking on this element
        if (e.target.id === "closeInviteGroups") {
          dispatch(removeEventUsers());
          dispatch(closeInviteGroups());
        }
      }}
    >
      <Modal>
        <ModalTitle>Pozvat skupiny</ModalTitle>
        <ModalIconClose
          onClick={() => {
            dispatch(removeEventUsers());
            dispatch(closeInviteGroups());
          }}
        />
        <SearchBar
          change={handleFilter}
          value={filterText}
          modal
          placeholder="Hledej skupiny"
        />
        {loading ? (
          <LoadingWrapper>
            <Loading src={loadingIcon} />
          </LoadingWrapper>
        ) : (
          <> {renderGroups() || <Text>Žádné skupiny k zobrazení</Text>} </>
        )}
        <Button
          onClick={() => {
            dispatch(closeInviteGroups());
          }}
        >
          Hotovo
        </Button>
      </Modal>
    </ModalWrapper>
  );
};

export default InviteGroupsModal;
