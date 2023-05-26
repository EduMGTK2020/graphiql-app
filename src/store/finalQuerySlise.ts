import { createSlice } from "@reduxjs/toolkit";

const finalQuerySlice = createSlice({
  name: "finalQuery",
  initialState: {
    value: "",
  },
  reducers: {
    addFinalQuery(state, action) {
      state.value = action.payload;
    },
  },
});

export const { addFinalQuery } = finalQuerySlice.actions;
export default finalQuerySlice.reducer;
