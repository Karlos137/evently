import { combineReducers } from "redux";

//reducers imports
import forgottenPasswordReducer from "./forgottenPasswordReducer";
import menuReducer from "./menuReducer";

const rootReducer = combineReducers({
  forgottenPasswordReducer,
  menuReducer
});

export default rootReducer;
