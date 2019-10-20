export const signIn = user => {
  return { type: "SIGN_IN", data: user };
};

export const signOut = () => {
  return { type: "SIGN_OUT" };
};
