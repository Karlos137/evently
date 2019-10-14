const inviteUsersReducer = (state = false, action) => {
  switch (action.type) {
    case "OPEN_INVITE_USERS":
      return true;
    case "CLOSE_INVITE_USERS":
      return false;
    default:
      return state;
  }
};

export default inviteUsersReducer;
