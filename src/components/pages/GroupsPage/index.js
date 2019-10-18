import React from "react";
import { Link } from "react-router-dom";
import Media from "react-media";

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

//svg import
import groupsIlu from "../../../images/illustrations/groups-ilu.svg";

const GroupsPage = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Heading>
          <Text>Skupiny</Text>
          <Link to="/create-group">
            <AddIcon />
          </Link>
        </Heading>
        <SearchBar placeholder="Hledej skupiny" />
        <GroupsWrapper>
          <Group name="Testing team" />
          <Group name="FunFunFun" />
          <Group name="Developers" />
        </GroupsWrapper>
      </ContentWrapper>
      <Media query="(min-width: 1200px)">
        {matches =>
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
