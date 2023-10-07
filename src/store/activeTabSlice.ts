import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { NavButtonInterface } from "../types";

const initialState: NavButtonInterface = {
  id: 1,
  name: "Experience",
};

export const activeTabSlice = createSlice({
  name: "activeTab",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<NavButtonInterface>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
  },
});

export const { setActiveTab } = activeTabSlice.actions;

export default activeTabSlice.reducer;
