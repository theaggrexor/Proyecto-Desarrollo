import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart.js';
import { Container } from 'react-bootstrap';
import { ClearCartIcon } from './Icons.jsx';

function CartItem({ product, addToCart, removeFromCart }) {
  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  return (
    <div className="cart">
      <div className="cart-info">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>Talla: {product.size}</p>
        <p>Precio: ${product.price}</p>
        <small>Cantidad: {product.quantity}</small>
        <button onClick={() => addToCart(product)}>+</button>
      </div>
      <button onClick={handleRemoveFromCart}>Eliminar Producto</button>
    </div>
  );
}

export function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);

  const handleConfirmCart = () => {
    // Realiza acciones necesarias antes de navegar
    // Por ejemplo, enviar datos al servidor o realizar cálculos adicionales

    // Luego, navega a la pasarela de pago
    navigate('/Pago');
  };

  return (
    <div>
      <Container>
        <h1>Productos Del Carrito</h1>
        <div className="cart-container">
          {cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              addToCart={() => addToCart(product)}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      </Container>
      <div className="confirm-cart">
        <div className="total-items">Items: {totalItems}</div>
        <div className="total">Total: ${total}</div>

        <button className="confirm" onClick={handleConfirmCart}>Confirmar Compra</button><br></br>
        <button className="limpiarcarrito" onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </div>
    </div>
  );
}
