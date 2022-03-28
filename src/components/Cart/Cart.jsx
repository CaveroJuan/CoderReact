import { useCartContext } from "../../context/cartContext";

function Cart() {
  const { cartList, vaciarCart } = useCartContext();
  console.log(cartList);
  return (
    <div>
      {cartList.map((item) => (
        <li>
          nombre: {item.Nombre} precio: {item.PrecioVentaUnidades1} cantidad:{item.cantidadVendida}
        </li>
      ))}
      <button onClick={vaciarCart}>VaciarCarrto</button>
    </div>
  );
}

export default Cart;
