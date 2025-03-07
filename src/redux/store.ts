import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./api/usersApi";
import usersReducer from "./slices/usersSlice";
import favoritesReducer from "./slices/favoritesSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["items"], 
};

const persistedFavoritesReducer = persistReducer(favoritesPersistConfig, favoritesReducer);

const rootReducer = combineReducers({
  users: usersReducer,
  favorites: persistedFavoritesReducer,
  [usersApi.reducerPath]: usersApi.reducer,
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(usersApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;