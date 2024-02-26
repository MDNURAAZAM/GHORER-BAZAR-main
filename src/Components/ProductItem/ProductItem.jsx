import { useCart } from "../../contexts/cartContext";

const ProductItem = ({ product }) => {
  const { id, name, img, price } = product || {};
  const { cart, setCart } = useCart();

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

 

  return (
    <div className="product border-2 p-4 shadow-lg">
      <img src={img} alt="" />
      <p className="font-bold text-xl mt-2"> Name : {name}</p>
      <p className="font-bold">Price :$ {price}</p>
      <div>
        <button
          onClick={handleAddClick}
          className=" bg-orange-400 rounded px-4 py-2 mt-2"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
