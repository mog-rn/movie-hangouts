import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../../services/movieService";
import authSlice from "../features/authSlice";
import userSlice from "../features/authSlice";

const store = configureStore({
  reducer: {
    userAuth: authSlice,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
