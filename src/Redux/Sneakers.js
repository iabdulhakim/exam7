import { createSlice } from "@reduxjs/toolkit";

const SneakersSlice = createSlice({
  name: "Sneakers",
  initialState: {
    activeImage: 1,
  },
  reducers: {
    addImage: (state, { payload }) => {
      state.activeImage = payload;
    },
  },
});

export const { addImage } = SneakersSlice.actions;

export default SneakersSlice.reducer;
