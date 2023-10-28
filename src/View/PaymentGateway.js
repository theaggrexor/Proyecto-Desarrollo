import React from 'react';
import PaymentGateway from '../components/PaymentGateway'; // Importa el componente PaymentGateway
import { CartProvider }  from "../context/cart";

function PaymentGatewayView() {
  return (
    <div>
      <h1>Pasarela de Pago</h1>
      {/* Renderiza el componente PaymentGateway dentro de la vista */}
      <CartProvider>
      <PaymentGateway />
      </CartProvider>
    </div>
  );
}

export default PaymentGatewayView;
