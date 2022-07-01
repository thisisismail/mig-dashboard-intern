let initialToken = "";

const tokenReducer = (token = initialToken, action) => {
  switch (action.type) {
    case "TOKEN":
      return action.payload;
    default:
      return token;
  }
};

export default tokenReducer;
