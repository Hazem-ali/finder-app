import { combineReducers } from "@reduxjs/toolkit";
import suspectsReducer from "./features/suspects/suspectsSlice";

export default combineReducers({
  suspects: suspectsReducer,
});
