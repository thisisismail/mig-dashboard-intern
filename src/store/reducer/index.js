import { combineReducers } from "redux";
import tokenReducer from "./tokenReducer.js";

const allReducers = combineReducers({
  tokenReducer: tokenReducer,
});

export default allReducers;
