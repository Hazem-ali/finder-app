import { STATUS_FOUND, STATUS_MISSING } from "@/constants/config";

const { createSlice } = require("@reduxjs/toolkit");

const contactSlice = createSlice({
  name: "searchResults",
  initialState: [],
  reducers: {
    setResult: (state, action) => {
      return [...action.payload.data];
    },
    clearResult: (state, action) => {
      return [];
    },
    markMissing: (state, action) => {
      const index = state.findIndex(
        (contact) => contact.id === action.payload.id,
      );
      if (index !== -1) {
        const contact = { ...state[index] };
        contact.status = STATUS_MISSING;
        state[index] = contact;
      }
    },
    markFound: (state, action) => {
      const index = state.findIndex(
        (contact) => contact.id === action.payload.id,
      );
      if (index !== -1) {
        const contact = { ...state[index] };
        contact.status = STATUS_FOUND;
        state[index] = contact;
      }
    },
  },
});

// Selector to get a contact by ID
export const getContactById = (state, contactId) => {
  return state.contacts.find((contact) => contact.id == contactId);
};

export const { setResult,clearResult, markFound, markMissing } = contactSlice.actions;
export default contactSlice.reducer;
