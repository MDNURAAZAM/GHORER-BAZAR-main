import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { CartProvider } from "../../contexts/cartContext";

const Root = () => {
  return (
    <div>
      <CartProvider>
        <Header></Header>
        <Outlet></Outlet>
      </CartProvider>
    </div>
  );
};

export default Root;
