import React from "react";
import { useCart } from "../../contexts/cartContext";

const CartItem = ({ cartItem }) => {
  const { cart, setCart } = useCart();
  const { id, name, price, quantity } = cartItem || {};
  const totalPrice = price * quantity;
  const handleAddClick = () => {
    const isExist = cart?.find((cartItem) => cartItem.id === id);
    if (isExist) {
      const updatedCart = cart?.map((cartItem) => {
        if (cartItem?.id === id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        } else {
          return cartItem;
        }
      });
      setCart([...updatedCart]);
    } else {
      const clickedProduct = {
        ...product,
        quantity: 1,
      };
      setCart((prevCart) => [...prevCart, clickedProduct]);
    }
  };
  const handleRemoveClick = () => {
    if (quantity > 0) {
      let updatedCart = cart
        ?.map((cartItem) => {
          if (cartItem?.id === id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            };
          } else {
            return cartItem;
          }
        })
        .filter((cartItem) => cartItem?.quantity > 0);

      setCart([...updatedCart]);
    }
  };
  return (
    <div className="grid grid-cols-4 gap-4 my-4">
      <div>{name}</div>
      <div className="">
        <button className="mr-4 font-extrabold" onClick={handleAddClick}>
          +
        </button>
        <span className="border border-orange-400 px-4 py-1 bg-slate-100">
          {quantity}
        </span>
        <button
          //   disabled={quantity === 0}
          className="ml-4 font-extrabold"
          onClick={handleRemoveClick}
        >
          -
        </button>
      </div>
      <div>BDT {price}</div>
      <div>BDT {totalPrice}</div>
    </div>
  );
};

export default CartItem;
