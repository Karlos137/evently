import React from "react";

//react component import
import Tabs from "./Tabs";

//svg import
import avatarMale from "../../../images/avatar-male.svg";

//styled components imports
import Avatar from "./Avatar";
import Name from "./Name";
import Email from "./Email";

const ProfilePage = () => {
  return (
    <>
      <Avatar src={avatarMale} />
      <Name>Nathan Drake</Name>
      <Email>nate@adventure.com</Email>
      <Tabs />
    </>
  );
};

export default ProfilePage;
