import React from 'react';

const Cart = ({ cartItems }) => {
  // Calcular el total de la compra
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Carrito de compras</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button className="btn btn-success">Pagar</button>
    </div>
  );
};

export default Cart;
