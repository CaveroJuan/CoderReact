import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Tienda from "./components/Tienda/Tienda";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="PaginaTienda">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tienda/*" element={<Tienda />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
          <Route path="/:CARRITO" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
