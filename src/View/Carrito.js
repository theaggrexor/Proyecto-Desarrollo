import { React } from "react";
import { NavBar } from "./Header";
import { CartProvider }  from "../context/cart";
import { Cart } from '../components/Cart.jsx'


const CarroCompras  = () => {
    return(
        <div className="CarroCompras">
            <NavBar/>
            <CartProvider>
            <Cart/>
            </CartProvider>
        </div>
    );
};
export default CarroCompras