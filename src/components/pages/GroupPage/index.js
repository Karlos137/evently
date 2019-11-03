import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import { auth } from "../../../firebase";

//svg import
import loadingIcon from "../../../images/loading.svg";

//action import
import { openDelete } from "../../../store/actions/deleteActions";

//react component import
import DeleteModal from "../../DeleteModal";

//styled components imports
import Wrapper from "./Wrapper";
import Name from "./Name";
import Icons from "./Icons";
import EditIcon from "../../../shared-styled-components/EditIcon";
import DeleteIcon from "../../../shared-styled-components/DeleteIcon";
import UsersHeading from "./UsersHeading";
import Users from "./Users";
import Loading from "./Loading";
import LoadingWrapper from "./LoadingWrapper";
import StyledLink from "../../../shared-styled-components/StyledLink";

//react components imports
import User from "../../User";

const GroupPage = () => {
  const isDeleteOpen = useSelector(state => state.deleteReducer);
  const dispatch = useDispatch();
  const [group, setGroup] = useState({});
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [owner, setOwner] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      const groupResponse = await axios.get(`/api/group/${id}`);
      if (groupResponse.data.createdBy === auth.currentUser.uid) {
        setOwner(true);
      }
      setGroup(groupResponse.data);

      const usersResponse = await axios.post("/api/users", {
        users: groupResponse.data.users
      });
      let usersFs = [];
      usersFs = usersResponse.data.map(user => {
        return (
          <StyledLink key={user.id} to={`/profile/${user.id}`}>
            <User name={user.name} email={user.email} />
          </StyledLink>
        );
      });
      setUsers(usersFs);
      setLoading(false);
    };
    getData();
  }, [id]);
  return (
    <Wrapper>
      {loading ? (
        <LoadingWrapper>
          <Loading src={loadingIcon} />
        </LoadingWrapper>
      ) : (
        <>
          <Name>{group.name}</Name>
          {owner ? (
            <Icons>
              <Link
                to={{
                  pathname: "/create-group",
                  state: {
                    id: id,
                    name: group.name
                  }
                }}
              >
                <EditIcon />
              </Link>
              <DeleteIcon
                onClick={() => {
                  dispatch(openDelete());
                }}
              />
            </Icons>
          ) : null}

          <UsersHeading>ČLENOVÉ</UsersHeading>
          <Users>
            {Array.isArray(users) && users.length ? (
              users
            ) : (
              <p>Žádní uživatelé k zobrazení.</p>
            )}
          </Users>
          {isDeleteOpen ? <DeleteModal group id={id} /> : null}
        </>
      )}
    </Wrapper>
  );
};

export default GroupPage;
