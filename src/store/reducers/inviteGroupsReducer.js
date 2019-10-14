const inviteGroupsReducer = (state = false, action) => {
  switch (action.type) {
    case "OPEN_INVITE_GROUPS":
      return true;
    case "CLOSE_INVITE_GROUPS":
      return false;
    default:
      return state;
  }
};

export default inviteGroupsReducer;
