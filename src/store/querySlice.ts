import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
  name: "query",
  initialState: {
    value: `query {
      characters{results{status}
        results{
          name
        }
      }
      }`,
  },
  reducers: {
    addQuery(state, action) {
      state.value = action.payload;
    },
  },
});

export const { addQuery } = querySlice.actions;
export default querySlice.reducer;
