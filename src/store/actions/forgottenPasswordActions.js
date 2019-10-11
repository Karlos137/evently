export const openForgottenPassword = () => {
  return { type: "OPEN_FORGOTTEN_PASSWORD" };
};

export const close = () => {
  return { type: "CLOSE_FORGOTTEN_PASSWORD" };
};
