import { React } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export function NavBar () {
  const navigate = useNavigate();

  const handle = () => {
    navigate('*');
  };  
  const handleLogin = () => {
    navigate('/Login');
  };
  const handleProductos = () => {
    navigate('/Producto');
  };
  const handleContacto = () => {
    navigate('/Contacto');
  };
  const handleBlog = () => {
    navigate('/Blog');
  };

  return (
    <div className="header">
      <div className="header-part1">
        <Navbar variant="dark" expand="lg">
          <Container>
            <p className="m-0">Welcome to FashionCode</p>
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link onClick={handleLogin}>Iniciar sesión</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="header-part2">
        <Navbar bg="white" variant="white" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://th.bing.com/th/id/OIP.9nB7zDTSjd36vcaisOYNlQHaFI?w=255&h=180&c=7&r=0&o=5&pid=1.7"
                width="30%"
                height="auto"
                className="d-inline-block align-top"
                onClick={handle}
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link onClick={handleProductos}>Productos</Nav.Link>
                <Nav.Link onClick={handleContacto}>Contacto</Nav.Link>
                <Nav.Link onClick={handleBlog}>Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
export default NavBar;
