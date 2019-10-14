const activityReducer = (state = false, action) => {
  switch (action.type) {
    case "OPEN_ACTIVITY":
      return true;
    case "CLOSE_ACTIVITY":
      return false;
    default:
      return state;
  }
};

export default activityReducer;
