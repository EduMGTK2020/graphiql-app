import { createSlice } from "@reduxjs/toolkit";

const variablesSlice = createSlice({
  name: "variables",
  initialState: {
    value: "{}",
  },
  reducers: {
    addVariables(state, action) {
      state.value = action.payload;
    },
  },
});

export const { addVariables } = variablesSlice.actions;
export default variablesSlice.reducer;
