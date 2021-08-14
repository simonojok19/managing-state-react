import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./cartContext";

ReactDOM.render(
  <ErrorBoundary>
    <CartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContextProvider>
  </ErrorBoundary>,
  document.getElementById("root")
);
