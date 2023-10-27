import { useId } from "react";
import { useCart } from "../hooks/useCart.js";
import { CartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { Container } from "react-bootstrap";

function CartItem({ image, price, title, size }) {
  const { clearCart } = useCart();
  const { ConfirmCart } = useCart();

  console.log("Thumbnail:", image);
  return (
    <>
      <div className="cart">
      <div className="cart-info">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>Talla: {size}</p>
        <p>Precio: ${price}</p>
      </div>
      <button onClick={ConfirmCart}>Confirmar Compra</button><br></br>
      <button onClick={clearCart}>Eliminar Producto</button>
    </div>
    </>
  );
}

export function Cart() {
  const { cart, addToCart } = useCart();
  const { clearCart } = useCart();
  const { ConfirmCart } = useCart();

  return (
    <>
      <div>
        <Container>
        <h1>Productos Del Carrito</h1>
        <div className="cart-container">
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              clearCart={clearCart}
              ConfirmCart={ConfirmCart}
              {...product}
            />
          ))}
        </div>
        </Container>
      </div>
    </>
  );
}
