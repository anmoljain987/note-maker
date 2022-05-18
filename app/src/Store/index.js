import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData(state, action) {
      state.data[action.payload.date] = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: dataSlice.reducer,
});
export const dataActions = dataSlice.actions;
