import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import movieSlice from "../features/movieSlice";

const store = configureStore({
  reducer: {
    userAuth: authSlice,
    movies: movieSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
