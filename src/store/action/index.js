export const token = (text) => {
  return {
    type: "TOKEN",
    payload: text,
  };
};
