import { useCartContext } from "../../context/cartContext";

function Cart() {
  const { cartList, vaciarCart } = useCartContext();
  console.log(cartList);
  return (
    <div>
      cart
      {cartList.map((item) => (
        <li>
          nombre: {item.title} precio: {item.price} cantidad:{item.cantidadVendida}
        </li>
      ))}
      <button onClick={vaciarCart}>VaciarCarrto</button>
    </div>
  );
}

export default Cart;
