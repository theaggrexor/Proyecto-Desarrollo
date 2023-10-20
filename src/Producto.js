import React from "react";
import { useFilters } from "./hooks/useFilters.js";
import { Products } from "./components/Products.jsx";
import { Cart } from "./components/Cart.jsx";
import { IS_DEVELOPMENT } from "./config.js";
import products from "./mocks/products.json";
import { CartProvider }  from "./context/cart";
import NavBar from "./View/Header.js"
import View from "./View/View-filter.js"

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
