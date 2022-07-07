import './Navbar.css';
import logo from '../../logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar} from 'react-bootstrap';
import ItemDetail  from '../itemDetail/ItemDetail'
import { NavLink } from 'react-router-dom'
import CartWidget from '../cartWidget/CartWidget';

function NavBar() {
  const category = [
    {id:'all', address: '/', text: 'Todos los productos'},
    {id:'vasos', address: '/category/Vasos', text: 'Vasos'},
    {id:'bolsas', address: '/category/Bolsas', text: 'Bolsas'},
  ];
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={NavLink} to="/"><img src={logo} className="logo" alt="logo"></img></Navbar.Brand>
    <Nav className="me-auto">
      <Navbar.Brand as={NavLink} activeClassName="active" to="/">Home</Navbar.Brand>
     {/* <NavLink className="nav-link" activeClassName="active" to="/product">Productos</NavLink>*/}


      <Navbar.Brand as={NavLink} to="#pricing">Contacto</Navbar.Brand>


    </Nav>
    <CartWidget />
    </Container>
  </Navbar>
  <br />
  <Container>
    <Nav className="me-auto">
      {category.map((cat)=>{
        return(
          <div key={cat.id}>
            <Nav.Link as={NavLink}
              to={cat.address}
              className={({ isActive }) => (isActive ? 'activeClass' : '')}>
              {cat.text}
            </Nav.Link>

          </div>
        )
     })}
     </Nav>
  </Container>


    </>

  );
}

export default NavBar;