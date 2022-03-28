import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Tienda from "./components/Tienda/Tienda";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/cartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="PaginaTienda">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tienda/*" element={<Tienda />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
            <Route path="/:Carrito" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
