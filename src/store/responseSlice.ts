import { createSlice } from "@reduxjs/toolkit";

const responseSlice = createSlice({
  name: "response",
  initialState: {
    value: "{}",
  },
  reducers: {
    addResponse(state, action) {
      state.value = action.payload;
    },
  },
});

export const { addResponse } = responseSlice.actions;
export default responseSlice.reducer;
