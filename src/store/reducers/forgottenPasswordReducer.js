const forgottenPasswordReducer = (state = false, action) => {
  switch (action.type) {
    case "OPEN_FORGOTTEN_PASSWORD":
      return true;
    case "CLOSE_FORGOTTEN_PASSWORD":
      return false;
    default:
      return state;
  }
};

export default forgottenPasswordReducer;
