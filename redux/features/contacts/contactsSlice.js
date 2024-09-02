const { createSlice } = require("@reduxjs/toolkit");

const contactSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    setContacts: (state, action) => {
      return [...action.payload.data];
    },
    addContact: (state, action) => {
      state.push(action.payload);
    },
    modifyContact: (state, action) => {
      const index = state.findIndex(
        (contact) => contact.id === action.payload.id,
      );
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },

    removeContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

// Selector to get a contact by ID
export const getContactById = (state, contactId) => {
  return state.contacts.find((contact) => contact.id == contactId);
};

export const { setContacts, addContact, modifyContact, removeContact } =
  contactSlice.actions;
export default contactSlice.reducer;
