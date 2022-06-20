import './Navbar.css';
import logo from '../logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavBar() {
  return (
    <header>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><img src={logo} className="logo" alt="logo"></img></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Tienda</Nav.Link>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />
    </header>

  );
}

export default NavBar;