import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function PaymentGateway() {
  const { cart } = useCart();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [submitForm, setSubmitForm] = useState(false);

  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  const handlePayment = () => {
    setSubmitForm(true);

    setTimeout(() => {
      setSubmitForm(false);
      // Implement your logic to process the payment and send data here
    }, 1500);
  };

  return (
    <div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
     
      <div className="section">
      
        <div className="container">
        
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <div className="container">
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
        </div>
        <hr></hr>
                <h6 className="mb-0 pb-3"><span>Datos</span><span>Pago</span></h6>
                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                <label for="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Informacion de contacto</h4>
                          <Form>
                            <Form.Group>
                              <Form.Label></Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Nombre"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label></Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Apellido"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label></Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Dirrecion"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label></Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Ciudad"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label></Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Region"
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label></Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Codigo Postal"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label></Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Pais"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                              />
                            </Form.Group>
                          </Form>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Pago</h4>
                          <Form>
                            <Form.Group>
                              <Form.Label></Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Numero de Tarjeta"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label></Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="MM/YY"
                                value={expirationDate}
                                onChange={(e) => setExpirationDate(e.target.value)}
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label></Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Codigo de Seguridad"
                                value={securityCode}
                                onChange={(e) => setSecurityCode(e.target.value)}
                              />
                            </Form.Group>
                          </Form>
                          <Button className="mt-4" onClick={handlePayment}>Pay</Button>
                          {submitForm && <p className="exito">Form submitted successfully</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentGateway;
