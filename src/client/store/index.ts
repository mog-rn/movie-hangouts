import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import movieSlice from "../features/movieSlice";
import selectedSeatsSlice from "../features/selectedSeatsSlice";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, authSlice);

const store = configureStore({
  reducer: {
    userAuth: authSlice,
    movies: movieSlice,
    selectedSeats: selectedSeatsSlice.reducer,
    persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
