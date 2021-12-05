import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from "react-loader-spinner";

import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loader
            type="Bars"
            color="#00BFFF"
            height={200}
            width={200}
            timeout={3000}
          />}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

