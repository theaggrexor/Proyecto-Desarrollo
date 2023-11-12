import React from "react";
import Home from "./components/Home";
import Productos from "./components/Vista-Producto.jsx";
import Login from "./components/Login";
import Contacto from "./components/Contacto";
import Blog from "./components/blog";
import Carrito from "./components/Carrito";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaymentGateway from "./components/PaymentGateway";

function App() {
  return (
<Routes>
  <Route path="*" element={<Home />} />
  <Route path="/Producto" element={<Productos />} />
  <Route path="/Login" element={<Login />} />
  <Route path="/Contacto" element={<Contacto />} />
  <Route path="/Blog" element={<Blog />} />
  <Route path="/Carrito" element={<Carrito/>} />
  <Route path="/Pago" element={<PaymentGateway/>} />
</Routes>

  );
}

export default App;
