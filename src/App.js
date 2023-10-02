import React from "react";
import Home from "./components/Header";
import { Routes } from "react-router-dom";
import { CartProvider }  from "./context/cart";
import { Cart } from './components/Cart.jsx'
import { Products } from './components/Products.jsx'
import { IS_DEVELOPMENT } from './config.js'
import { Footer } from './components/Footer.jsx'
import { useFilters } from './hooks/useFilters.js'
import products from './mocks/products.json';


function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <div className="bg-gray-100 font-sans w-full h-full items-center justify-center">
        <Home/>
        <Cart/>
        <Products products={filteredProducts} />
        <Footer/>
      </div>
    </CartProvider>
  );
}

export default App;
