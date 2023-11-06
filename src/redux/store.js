import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { catalogCarsReducer } from "./carsSlice";
import { favoriteCarsReducer } from "./favoriteSlice";
import { filterReducer } from "./filterSlice";

const persistConfig = {
  key: "favorite",
  storage,
  whitelist: ["favoriteCars"],
};

const rootReducer = combineReducers({
  catalogCars: catalogCarsReducer,
  favoriteCars: favoriteCarsReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
