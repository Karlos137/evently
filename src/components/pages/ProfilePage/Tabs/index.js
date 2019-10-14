import React, { useState } from "react";

//react components imports
import Groups from "./Groups";
import EventCard from "../../../EventCard";

//styled components import
import Wrapper from "./Wrapper";
import Tab from "../../../../shared-styled-components/Tab";

const Tabs = () => {
  const [tabs, setTabs] = useState({ events: true, groups: false });

  //set active tab
  const handleClick = e => {
    setTabs({ events: false, groups: false, [e.target.id]: true });
  };

  //render content (component) based on active tab
  const renderContent = () => {
    if (tabs.events) {
      return (
        <>
          <EventCard />
          <EventCard />
        </>
      );
    } else if (tabs.groups) {
      return <Groups />;
    } else {
      return null;
    }
  };
  return (
    <>
      <Wrapper>
        <Tab onClick={handleClick} active={tabs.events} id="events">
          Události
        </Tab>
        <Tab onClick={handleClick} active={tabs.groups} id="groups">
          Skupiny
        </Tab>
      </Wrapper>
      {renderContent()}
    </>
  );
};

export default Tabs;
