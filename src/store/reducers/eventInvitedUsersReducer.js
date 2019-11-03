const eventInvitedUsersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EVENT_USER":
      let containsUser = false;
      state.forEach(user => {
        if (user.id === action.user.id) {
          containsUser = true;
        }
      });
      if (containsUser) {
        return state;
      } else {
        const newStateAdd = [...state];
        newStateAdd.push({ id: action.user.id, name: action.user.name });
        return newStateAdd;
      }

    case "REMOVE_EVENT_USER":
      const newStateRemove = state.filter(user => {
        return user.id !== action.user.id;
      });
      return newStateRemove;
    case "REMOVE_EVENT_USERS":
      return [];
    default:
      return state;
  }
};

export default eventInvitedUsersReducer;
