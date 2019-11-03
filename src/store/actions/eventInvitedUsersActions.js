export const addEventUser = user => {
  return { type: "ADD_EVENT_USER", user: { id: user.id, name: user.name } };
};

export const removeEventUser = user => {
  return { type: "REMOVE_EVENT_USER", user: { id: user.id, name: user.name } };
};

export const removeEventUsers = () => {
  return { type: "REMOVE_EVENT_USERS" };
};
