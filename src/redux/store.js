import { configureStore } from "@reduxjs/toolkit";
import seatReducer from './reducers/seatSlice'

const store = configureStore({
  reducer: {
    seats: seatReducer,
  },
});

export default store;
