import './Navbar.css';
import logo from '../../logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar} from 'react-bootstrap';
import ItemDetail  from '../itemDetail/ItemDetail'
import { NavLink } from 'react-router-dom'
import CartWidget from '../cartWidget/CartWidget';

function NavBar() {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><img src={logo} className="logo" alt="logo"></img></Navbar.Brand>
    <Nav className="me-auto">

      <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
     {/* <NavLink className="nav-link" activeClassName="active" to="/product">Productos</NavLink>*/}


      <Nav.Link href="#pricing">Contacto</Nav.Link>


    </Nav>
    <CartWidget />
    </Container>
  </Navbar>
  <br />

    </>

  );
}

export default NavBar;