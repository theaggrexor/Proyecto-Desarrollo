import React from "react";
import { useFilters } from "../hooks/useFilters.js";
import { Products } from "./Productos.jsx";
import products from "../mocks/products.json";
import { CartProvider }  from "../context/cart.jsx";
import NavBar from "./Header.jsx"
import View from "./Vista-filter.jsx"

const Producto = () => {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <div className="Home">
        <NavBar/>
        <View/>
      <CartProvider>
        <Products products={filteredProducts} />
      </CartProvider>
    </div>
  );
};
export default Producto;
