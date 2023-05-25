import { configureStore } from "@reduxjs/toolkit";
import variablesSlice from "./variablesSlice";
import responseSlice from "./responseSlice";
import querySlice from "./querySlice";
import finalQuerySlise from "./finalQuerySlise";

export const store = configureStore({
  reducer: {
    variables: variablesSlice,
    response: responseSlice,
    query: querySlice,
    finalQuery: finalQuerySlise,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
