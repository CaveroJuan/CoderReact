import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  const agregarCart = (item) => {
    //Mal corregir
    console.log(cartList);
    setCartList([...cartList, item]);
    const algo = cartList.find((data) => data === item);
    console.log(algo);

    console.log(cartList);
    // cartList.find((data) => data.id === item.id) ? console.log("si") : setCartList([...cartList, item]);
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
