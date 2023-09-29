import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Carrito from "./components/Carrito";
import { Productos } from "./components/Productos";
import Cart from "./components/Carrito";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="App">
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={{ padding: "0 20px" }}
        >
          <a className="navbar-brand" href="/">
            <img
              src="/ruta/para/tu/logo.png"
              alt="Logo"
              style={{ maxHeight: "60px" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item d-lg-none">
                <a
                  className="nav-link"
                  href="/login"
                  style={{ fontSize: "16px", marginTop: "15px" }}
                >
                  Iniciar sesión
                </a>
              </li>
              <li className="nav-item d-none d-lg-block dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontSize: "16px", marginTop: "15px" }}
                >
                  Mi cuenta
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/login">
                      Iniciar sesión
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/registro">
                      Registrarse
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tu-enlace">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ fontSize: "24px", marginTop: "15px" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="product-list">
        <Productos addToCart={addToCart} />
      </div>
      <Cart cartItems={cartItems} />

      <footer className="footer bg-success text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Contacto</h4>
              <p>Dirección: 123 Fashion St, Ciudad de la Moda</p>
              <p>Teléfono: (123) 456-7890</p>
              <p>Email: info@fashionnova.com</p>
            </div>
            <div className="col-md-4">
              <h4>Enlaces rápidos</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/"></a>
                </li>
                <li>
                  <a href="/productos"></a>
                </li>
                <li>
                  <a href="/ofertas"></a>
                </li>
                <li>
                  <a href="/contacto"></a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Síguenos en las redes sociales</h4>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="text-center">
            <p>
              &copy; {new Date().getFullYear()} FashionNova. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
