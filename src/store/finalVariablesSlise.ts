import { createSlice } from "@reduxjs/toolkit";

const finalVariablesSlice = createSlice({
  name: "finalVariables",
  initialState: {
    value: "{}",
  },
  reducers: {
    addFinalVariables(state, action) {
      state.value = action.payload;
    },
  },
});

export const { addFinalVariables } = finalVariablesSlice.actions;
export default finalVariablesSlice.reducer;
