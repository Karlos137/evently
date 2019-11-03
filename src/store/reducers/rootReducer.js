import { combineReducers } from "redux";

//reducers imports
import forgottenPasswordReducer from "./forgottenPasswordReducer";
import menuReducer from "./menuReducer";
import activityReducer from "./activityReducer";
import inviteUsersReducer from "./inviteUsersReducer";
import inviteGroupsReducer from "./inviteGroupsReducer";
import deleteReducer from "./deleteReducer";
import userReducer from "./userReducer";
import groupInvitedUsersReducer from "./groupInvitedUsersReducer";
import eventInvitedUsersReducer from "./eventInvitedUsersReducer";

const rootReducer = combineReducers({
  forgottenPasswordReducer,
  menuReducer,
  activityReducer,
  inviteUsersReducer,
  inviteGroupsReducer,
  deleteReducer,
  userReducer,
  groupInvitedUsersReducer,
  eventInvitedUsersReducer
});

export default rootReducer;
