import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
// import { Store } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import { store } from "./store";
import ReactDOM from "react-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
 
