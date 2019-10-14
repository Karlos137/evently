import { combineReducers } from "redux";

//reducers imports
import forgottenPasswordReducer from "./forgottenPasswordReducer";
import menuReducer from "./menuReducer";
import activityReducer from "./activityReducer";
import inviteUsersReducer from "./inviteUsersReducer";
import inviteGroupsReducer from "./inviteGroupsReducer";

const rootReducer = combineReducers({
  forgottenPasswordReducer,
  menuReducer,
  activityReducer,
  inviteUsersReducer,
  inviteGroupsReducer
});

export default rootReducer;
