import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const agregarCart = (item) => {
    //Mal corregir
    console.log(cartList);
    console.log(item);
    cartList.some((data) => item === data) ? console.log("si") : setCartList([...cartList, item]);
    // cartList.find((item) => item, cartList) ? console.log("ya se encuentra en el carrito") : setCartList([...cartList, item]);
  };

  const vaciarCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarCart,
        vaciarCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
