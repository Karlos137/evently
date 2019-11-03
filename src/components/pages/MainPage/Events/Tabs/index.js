import React, { useState } from "react";

//react component import
import EventList from "./EvenList";

//styled components imports
import Wrapper from "./Wrapper";
import Tab from "../../../../../shared-styled-components/Tab";

const Tabs = () => {
  const [tabs, setTabs] = useState({
    all: true,
    created: false,
    upcoming: false,
    past: false,
    recommended: false
  });

  //set active tab
  const handleClick = e => {
    setTabs({ events: false, groups: false, [e.target.id]: true });
  };

  //render content (component) based on active tab
  const renderContent = () => {
    if (tabs.all) {
      return <EventList all />;
    } else if (tabs.created) {
      return <EventList created />;
    } else if (tabs.upcoming) {
      return <EventList upcoming />;
    } else if (tabs.past) {
      return <EventList past />;
    } else if (tabs.recommended) {
      return <EventList recommended />;
    } else {
      return null;
    }
  };

  return (
    <>
      <Wrapper>
        <Tab onClick={handleClick} active={tabs.all} id="all">
          Všechny
        </Tab>
        <Tab onClick={handleClick} active={tabs.created} id="created">
          Vytvořené
        </Tab>
        <Tab onClick={handleClick} active={tabs.upcoming} id="upcoming">
          Nadcházející
        </Tab>
        <Tab onClick={handleClick} active={tabs.past} id="past">
          Minulé
        </Tab>
        <Tab onClick={handleClick} active={tabs.recommended} id="recommended">
          Doporučené
        </Tab>
      </Wrapper>
      {renderContent()}
    </>
  );
};

export default Tabs;
