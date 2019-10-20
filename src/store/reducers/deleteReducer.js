const deleteReducer = (state = false, action) => {
  switch (action.type) {
    case "OPEN_DELETE":
      return true;
    case "CLOSE_DELETE":
      return false;
    default:
      return state;
  }
};

export default deleteReducer;
