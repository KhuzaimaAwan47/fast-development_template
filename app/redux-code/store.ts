import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from 'redux-persist';
import userReducer from "./reducer";

// Configure persistence
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['showActivityLoader', 'autoLogout'], // keys you don't want to persist
};

// Combine reducers
const rootReducer = combineReducers({
  userState: userReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Infer RootState type for TypeScript
export type RootState = ReturnType<typeof rootReducer>;

// Create store
const store = createStore(persistedReducer);

// Create persistor
const persistor = persistStore(store);

// Export store and persistor
export { persistor, store };


export default store;