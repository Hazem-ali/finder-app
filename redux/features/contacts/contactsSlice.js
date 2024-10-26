const { createSlice } = require("@reduxjs/toolkit");

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    fetched: [],
    searchResults: [],
  },
  reducers: {
    setContacts: (state, action) => {
      state.fetched = [...action.payload.data];
    },
    addContactIfNotExists: (state, action) => {
      const index = state.fetched.findIndex(
        (contact) => contact.id === action.payload.id,
      );
      if (index === -1) {
        state.fetched.push(action.payload);
      }
    },
    modifyContact: (state, action) => {
      const index = state.fetched.findIndex(
        (contact) => contact.id === action.payload.id,
      );
      if (index !== -1) {
        state.fetched[index] = { ...state.fetched[index], ...action.payload };
      }
    },

    setSearchResult: (state, action) => {
      state.searchResults = [...action.payload.data];
    },
    clearSearchResult: (state, action) => {
      state.searchResults = [];
    },
    markMissing: (state, action) => {
      const index = state.searchResults.findIndex(
        (contact) => contact.id === action.payload.id,
      );
      if (index !== -1) {
        const contact = { ...state.searchResults[index] };
        contact.status = STATUS_MISSING;
        state.searchResults[index] = contact;
      }
    },
    markFound: (state, action) => {
      const index = state.searchResults.findIndex(
        (contact) => contact.id === action.payload.id,
      );
      if (index !== -1) {
        const contact = { ...state.searchResults[index] };
        contact.status = STATUS_FOUND;
        state.searchResults[index] = contact;
      }
    },
  },
});

// Selector to get a contact by ID
export const getContactById = (state, contactId) => {
  let contact;

  try {
    if (state.contacts.fetched) {
      contact = state.contacts.fetched.find(
        (contact) => contact.id == contactId,
      );
    }
    if (!contact && state.contacts.searchResults) {
      contact = state.contacts.searchResults.find(
        (contact) => contact.id == contactId,
      );
    }
  } catch (error) {
    contact = null;
  }
  return contact;
};

export const {
  setContacts,
  addContactIfNotExists,
  modifyContact,
  setSearchResult,
  clearSearchResult,
  markFound,
  markMissing,
} = contactSlice.actions;
export default contactSlice.reducer;
