import React from "react";
import { useCart } from "../../contexts/cartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useCart();
  const totalPrice = cart?.reduce((accumulator, item) => {
    return (accumulator += item.price * item.quantity);
  }, 0);
  return (
    <div className="w-full p-16">
      <div className="grid grid-cols-4 gap-4 my-4">
        <div>Name</div>
        <div className="">Quantity</div>
        <div>Price</div>
        <div>Total Price</div>
      </div>
      <hr />
      {cart?.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <hr />
      <div className="grid grid-cols-4 gap-4 my-4">
        <div></div>
        <div className=""></div>
        <div></div>
        <div>BDT {totalPrice}</div>
      </div>
    </div>
  );
};

export default Cart;
