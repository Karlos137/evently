import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import axios from "axios";

import {
  addEventUser,
  removeEventUser
} from "../../store/actions/eventInvitedUsersActions";

//styled components imports
import Wrapper from "./Wrapper";
import Name from "./Name";
import InviteWrapper from "./InviteWrapper";
import PlusIcon from "../../shared-styled-components/PlusIcon";
import CheckIcon from "../../shared-styled-components/CheckIcon";

const Group = props => {
  const [invited, setInvited] = useState(false);
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (props.users) {
      let usersFs = [];
      const getUsers = async () => {
        const promises = props.users.map(async user => {
          return axios.get(`/api/user/${user}`);
        });

        Promise.all(promises).then(values => {
          usersFs = values.map(value => {
            return {
              id: value.config.url.substring(10),
              name: value.data.name
            };
          });
          setUsers(usersFs);
        });
      };

      getUsers();
    }
  }, [props.users]);

  //toggle invited
  const handleClick = () => {
    setInvited(!invited);
    if (invited === true) {
      users.forEach(user => {
        dispatch(removeEventUser(user));
      });
    } else {
      users.forEach(user => {
        dispatch(addEventUser(user));
      });
    }
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
