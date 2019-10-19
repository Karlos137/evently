import React from "react";

//styled components imports
import Wrapper from "./Wrapper";
import Name from "./Name";
import Icons from "./Icons";
import EditIcon from "../../../shared-styled-components/EditIcon";
import DeleteIcon from "../../../shared-styled-components/DeleteIcon";
import UsersHeading from "./UsersHeading";
import Users from "./Users";

//react components imports
import User from "../../User";

const GroupPage = () => {
  return (
    <Wrapper>
      <Name>Developers</Name>
      <Icons>
        <EditIcon />
        <DeleteIcon />
      </Icons>
      <UsersHeading>ČLENOVÉ</UsersHeading>
      <Users>
        <User name="Gordon Freeman" email="half@life.com" />
        <User name="Lara Croft" email="lara@mail.com" />
        <User name="Kratos" email="godofwar@gg.com" />
      </Users>
    </Wrapper>
  );
};

export default GroupPage;
