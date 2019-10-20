const userReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { data: action.user };
    case "SIGN_OUT":
      return { data: null };
    default:
      return state;
  }
};

export default userReducer;
