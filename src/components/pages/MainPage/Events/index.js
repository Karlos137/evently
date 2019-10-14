import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//action import
import { openActivity } from "../../../../store/actions/activityActions";

//react components imports
import Tabs from "./Tabs";
import ActivityModal from "./ActivityModal";

//styled components imports
import Wrapper from "./Wrapper";
import Heading from "./Heading";
import Text from "./Text";
import AddIcon from "../../../../shared-styled-components/AddIcon";
import BellIcon from "./BellIcon";

const Events = () => {
  const isActivityOpen = useSelector(state => state.activityReducer);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Heading>
        <Text>Události</Text>
        <Link to="/create-event">
          <AddIcon />
        </Link>
      </Heading>
      <BellIcon
        onClick={() => {
          dispatch(openActivity());
        }}
      />
      <Tabs />
      {isActivityOpen ? <ActivityModal /> : null}
    </Wrapper>
  );
};

export default Events;
