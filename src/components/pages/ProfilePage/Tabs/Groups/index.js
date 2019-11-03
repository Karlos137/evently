import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//svg import
import loadingIcon from "../../../../../images/loading.svg";

//styled components imports
import Wrapper from "./Wrapper";
import Group from "./Group";
import Loading from "../../../../../shared-styled-components/Loading";
import LoadingWrapper from "../../../../../shared-styled-components/LoadingWrapper";
import StyledLink from "../../../../../shared-styled-components/StyledLink";

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const getGroups = async () => {
      const response = await axios.post("/api/groups/member", { id: id });
      let groupsFs = [];
      groupsFs = response.data.map(group => {
        return (
          <StyledLink to={`/group/${group.id}`} key={group.id}>
            <Group>{group.name}</Group>
          </StyledLink>
        );
      });
      setGroups(groupsFs);
      setLoading(false);
    };

    getGroups();
  }, [id]);
  return (
    <Wrapper>
      {loading ? (
        <LoadingWrapper>
          <Loading src={loadingIcon} />
        </LoadingWrapper>
      ) : Array.isArray(groups) && groups.length ? (
        groups
      ) : (
        <p>Žádné skupiny k zobrazení.</p>
      )}
    </Wrapper>
  );
};

export default Groups;
