import React from "react";
import Home from "./View/Home";
import Productos from "./View/Producto";
import Login from "./View/Login";
import Contacto from "./View/Contacto";
import Blog from "./View/blog";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
<Routes>
  <Route path="*" element={<Home />} />
  <Route path="/Producto" element={<Productos />} />
  <Route path="/Login" element={<Login />} />
  <Route path="/Contacto" element={<Contacto />} />
  <Route path="/Blog" element={<Blog />} />
</Routes>

  );
}

export default App;
