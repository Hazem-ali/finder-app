import { combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./features/contacts/contactsSlice";

export default combineReducers({
  contacts: contactsReducer,
});
