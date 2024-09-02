import { combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./features/contacts/contactsSlice";
import searchResults from "./features/contacts/searchSlice";

export default combineReducers({
  contacts: contactsReducer,
  searchResults,
});
