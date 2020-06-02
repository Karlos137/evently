import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Media from "react-media";
import { breakpoints } from "../../../utils/responsiveHelpers";

//styled components imports
import Wrapper from "./Wrapper";
import Heading from "./Heading";
import Text from "./Text";
import AddIcon from "../../../shared-styled-components/AddIcon";
import SearchBar from "../../SearchBar";
import ContentWrapper from "./ContentWrapper";
import GroupsWrapper from "./GroupsWrapper";
import Group from "../../Group";
import GroupsIluWrapper from "./GroupsIluWrapper";
import GroupsIlu from "./GroupsIlu";
import GroupLink from "./GroupLink";
import Loading from "../../../shared-styled-components/Loading";
import LoadingWrapper from "../../../shared-styled-components/LoadingWrapper";

//svg imports
import groupsIlu from "../../../images/illustrations/groups-ilu.svg";
import loadingIcon from "../../../images/loading.svg";

const GroupsPage = () => {
  const [groups, setGroups] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGroups = async () => {
      const response = await axios.get("/api/groups");
      let groupsFs = [];
      groupsFs = response.data.map((group) => {
        return (
          <GroupLink to={`group/${group.id}`} key={group.id}>
            <Group name={group.name} />
          </GroupLink>
        );
      });
      setGroups(groupsFs);
      setLoading(false);
    };

    getGroups();
  }, []);

  const handleFilter = (e) => {
    setFilterText(e.target.value);
  };

  const renderGroups = () => {
    if (filterText === "") {
      return groups;
    } else {
      const filteredGroups = groups.filter((group) => {
        return group.props.children.props.name.indexOf(filterText) !== -1;
      });
      if (Array.isArray(filteredGroups) && filteredGroups.length) {
        return filteredGroups;
      } else {
        return null;
      }
    }
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <Heading>
          <Text>Skupiny</Text>
          <Link to="/create-group">
            <AddIcon />
          </Link>
        </Heading>
        <SearchBar
          change={handleFilter}
          value={filterText}
          placeholder="Hledej skupiny"
        />
        <GroupsWrapper>
          {loading ? (
            <LoadingWrapper>
              <Loading src={loadingIcon} />
            </LoadingWrapper>
          ) : (
            <> {renderGroups() || <p>Žádné skupiny k zobrazení</p>} </>
          )}
        </GroupsWrapper>
      </ContentWrapper>
      <Media query={`(${breakpoints.largeDesktop})`}>
        {(matches) =>
          matches ? (
            <GroupsIluWrapper>
              <GroupsIlu src={groupsIlu} />
            </GroupsIluWrapper>
          ) : null
        }
      </Media>
    </Wrapper>
  );
};

export default GroupsPage;
