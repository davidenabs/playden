import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./global.css";

const container = document.getElementById("root");
const root = createRoot(container);
const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
});

root.render(
  <AuthProvider store={store}>
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
