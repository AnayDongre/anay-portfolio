import { configureStore } from "@reduxjs/toolkit";
import activeTabReducer from "./activeTabSlice";
export const store = configureStore({
  reducer: {
    activeTab: activeTabReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
