export const addGroupUser = user => {
  return { type: "ADD_GROUP_USER", user: { id: user.id, name: user.name } };
};

export const removeGroupUser = user => {
  return { type: "REMOVE_GROUP_USER", user: { id: user.id, name: user.name } };
};

export const removeGroupUsers = () => {
  return { type: "REMOVE_GROUP_USERS" };
};
