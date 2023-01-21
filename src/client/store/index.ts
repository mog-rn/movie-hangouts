import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import movieSlice from "../features/movieSlice";
import selectedSeatsSlice from "../features/selectedSeatsSlice";

const store = configureStore({
  reducer: {
    userAuth: authSlice,
    movies: movieSlice,
    selectedSeats: selectedSeatsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
