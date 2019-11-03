import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import axios from "axios";

import { auth } from "../../firebase";

//actions imports
import { closeInviteUsers } from "../../store/actions/inviteUsersActions";
import { removeGroupUsers } from "../../store/actions/groupInvitedUsersActions";
import { removeEventUsers } from "../../store/actions/eventInvitedUsersActions";

//svg import
import loadingIcon from "../../images/loading.svg";

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
import Text from "./Text";
import Loading from "../../shared-styled-components/Loading";
import LoadingWrapper from "../../shared-styled-components/LoadingWrapper";

const InviteUsersModal = props => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("/api/users");
      let usersFs = [];
      usersFs = response.data.filter(user => {
        return user.id !== auth.currentUser.uid;
      });
      usersFs = usersFs.map(user => {
        if (props.group) {
          return (
            <User
              group
              key={user.id}
              id={user.id}
              modal
              invite
              name={user.name}
              email={user.email}
            />
          );
        } else {
          return (
            <User
              event
              key={user.id}
              id={user.id}
              modal
              invite
              name={user.name}
              email={user.email}
            />
          );
        }
      });
      setUsers(usersFs);
      setLoading(false);
    };
    if (props.group) {
      dispatch(removeGroupUsers());
    }
    if (props.event) {
      dispatch(removeEventUsers());
    }

    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilter = e => {
    setFilterText(e.target.value);
  };

  const renderUsers = () => {
    if (filterText === "") {
      return users;
    } else {
      const filteredUsers = users.filter(user => {
        return (
          user.props.name.indexOf(filterText) !== -1 ||
          user.props.email.indexOf(filterText) !== -1
        );
      });
      if (Array.isArray(filteredUsers) && filteredUsers.length) {
        return filteredUsers;
      } else {
        return null;
      }
    }
  };

  return (
    <ModalWrapper
      id="closeInviteUsers"
      onClick={e => {
        //only close when clicking on this element
        if (e.target.id === "closeInviteUsers") {
          if (props.group) {
            dispatch(removeGroupUsers());
          }
          if (props.event) {
            dispatch(removeEventUsers());
          }

          dispatch(closeInviteUsers());
        }
      }}
    >
      <Modal>
        <ModalTitle>Pozvat uživatele</ModalTitle>
        <ModalIconClose
          onClick={() => {
            if (props.group) {
              dispatch(removeGroupUsers());
            }
            if (props.event) {
              dispatch(removeEventUsers());
            }
            dispatch(closeInviteUsers());
          }}
        />
        <SearchBar
          change={handleFilter}
          value={filterText}
          modal
          placeholder="Hledej uživatele"
        />
        {loading ? (
          <LoadingWrapper>
            <Loading src={loadingIcon} />
          </LoadingWrapper>
        ) : (
          <>
            {renderUsers() || <Text>Žádní uživatelé k zobrazení</Text>}
            <RecommendedTitle>Doporučení</RecommendedTitle>
            <User modal invite name="Kratos" email="godofwar@gg.com" />
          </>
        )}
        <Button
          onClick={() => {
            dispatch(closeInviteUsers());
          }}
          marginTop="32px"
        >
          Hotovo
        </Button>
      </Modal>
    </ModalWrapper>
  );
};

export default InviteUsersModal;
