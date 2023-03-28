import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import store, { persistor } from "./Store/Store";
import * as _redux from "./Store/index";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RouterPage from "./routes/RouterPage";

_redux.setupAxios(axios, store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={"Loading"} persistor={persistor}>
        <React.StrictMode>
         <RouterPage/>
        </React.StrictMode>
      </PersistGate>
    </Provider>
  );
}

export default App;
