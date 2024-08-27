const { createSlice } = require("@reduxjs/toolkit");

const suspectSlice = createSlice({
  name: "suspects",
  initialState: [],
  reducers: {
    setSuspects: (state, action) => {
      return  [...action.payload.data];
    },
    addSuspect: (state, action) => {
      state.push(action.payload);
    },
    removeSuspect: (state, action) => {
      return state.filter((suspect) => suspect.id !== action.payload);
    },
  },
});

export const { setSuspects, addSuspect, removeSuspect } = suspectSlice.actions;
export default suspectSlice.reducer;
