import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import PaymentGateway from '../components/PaymentGateway';
import { CartProvider } from '../context/cart';

import { CartIcon } from '../components/Icons';
function PaymentGatewayView() {
  return (
    <div className='titulo-pasarela'>
      <div className='Title-container'>

        
      <Link to='/Carrito'>
          <button>  <CartIcon /></button>
        </Link>
        
        <div className='element2'>
        <h1>Pasarela de Pago</h1>
        </div>
      </div>
      <CartProvider>
        <PaymentGateway />
      </CartProvider>
    </div>
  );
}

export default PaymentGatewayView;
