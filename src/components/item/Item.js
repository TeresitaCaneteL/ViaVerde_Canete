
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css';
import {Card, Container, Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function Item({ item }) {
  return (

     <Container>

      <div className="card card-body  categoria" style={{ width: '20rem' }}>
       <Card.Title>{item.title}</Card.Title>
       <img src={item.image} style={{ height: '20rem' }} />
        <Card.Body>
          <Card.Text>
           <p>{item.description}</p>
           <span className="text-muted">Stock: { item.stock}</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Container>

          <Button as={NavLink} activeClassName="active" className="btn btn-success" to={`/product/${item.id}`}>ver</Button>

          </Container>
        </Card.Footer>

      </div>
    </Container>



  );
}

export default Item;