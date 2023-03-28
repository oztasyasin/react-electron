import { persistReducer, persistStore } from "redux-persist";
import { createStore } from "redux";
import * as authSlice from "./AuthStore/authSlice";
import storage from "redux-persist/lib/storage";


export const authReducer = persistReducer(
  { storage, key: "state-auth", blacklist: [] },
  authSlice.Slice.reducer
);



const authStore = createStore(authReducer);

persistStore(authStore);

