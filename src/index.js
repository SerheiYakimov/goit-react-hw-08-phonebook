import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from './redux/store';
import {BrowserRouter as Router} from 'react-router-dom';

// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    {/* <PersistGate persistor={persistor} loading={null}> */}
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    {/* </PersistGate> */}
  </React.StrictMode>,
  document.getElementById("root")
);

