import { configureStore } from "@reduxjs/toolkit";
import variablesSlice from "./variablesSlice";

export const store = configureStore({
  reducer: {
    variables: variablesSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
