import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    menuToggle: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.menuToggle = !state.menuToggle;
    },
    toggleMenuClose: (state) => {
      state.menuToggle = false;
    },
  },
});

export const { toggleMenu, toggleMenuClose } = appSlice.actions;
export default appSlice.reducer;
