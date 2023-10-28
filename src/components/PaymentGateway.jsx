import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function PaymentGateway() {
    console.log('PaymentGateway loaded');
  const { cart } = useCart();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  // Calcular el precio total
  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  // Manejar el pago (puedes implementar tu lógica aquí)
  const handlePayment = () => {
    // Aquí puedes agregar la lógica para procesar el pago, guardar datos, etc.
    // En este ejemplo, simplemente mostramos un mensaje de confirmación.
    alert('¡Pago realizado con éxito!');
  };

  return (
    <Container>
      <h1>Pasarela de Pago</h1>
      <Row>
        <Col>
          <h2>Detalles de la Compra</h2>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                {product.title} - ${product.price} x {product.quantity}
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
        </Col>
        <Col>
          <h2>Información del Cliente</h2>
          <Form>
            <Form.Group>
              <Form.Label>Primer Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su primer nombre"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            {/* Agrega campos para el segundo nombre, dirección, ciudad, región, código postal y país */}
            {/* Ejemplo: */}
            <Form.Group>
              <Form.Label>Segundo Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su segundo nombre"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
          </Form>
          <Button variant="primary" onClick={handlePayment}>
            Pagar
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default PaymentGateway;
