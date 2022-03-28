import { useEffect } from "react";
import { useCartContext } from "../../context/cartContext";

function Cart() {
  const { cartList, vaciarCart, eliminarItemCart } = useCartContext();
  console.log(cartList);

  useEffect(() => {}, []);

  return (
    <div>
      {cartList.map((item) => (
        <li>
          nombre: {item.Nombre} precio: {item.PrecioVentaUnidades1} cantidad:{item.cantidadVendida}
          <button eliminarItem={item}> eliminarItemCart </button>
        </li>
      ))}
      <button onClick={vaciarCart}>VaciarCarrto</button>
    </div>
  );
}

export default Cart;
