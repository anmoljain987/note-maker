import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData(state, action) {
      //Making sure that data is defined when submitted and then adding data
      const { date } = action.payload;
      if (!state.data[date]) {
        state.data[date] = [];
      }
      state.data[date].push(action.payload);
    },
  },
});

export const store = configureStore({
  reducer: dataSlice.reducer,
});
export const dataActions = dataSlice.actions;
