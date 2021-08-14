import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Cart from "./Cart";
import { useCart } from "./cartContext";
import CheckoutClass from "./CheckoutClass";
import DetailClass from "./DetailClass";

export default function App() {
  const { dispatch } = useCart();
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to Home</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route path="/:category/:id" element={<DetailClass />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/checkout"
              element={<CheckoutClass dispatch={dispatch} />}
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
