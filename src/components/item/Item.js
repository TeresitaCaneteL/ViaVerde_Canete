import ItemCount from '../itemCount/ItemCount.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css';
import {Card, Container} from 'react-bootstrap';

function Item({ item }) {
  return (
     <Container>
      <div className="card card-body  categoria" style={{ width: '22rem' }}>
       <Card.Title>{item.title}</Card.Title>
       <img src={item.image} style={{ height: '20rem' }} />
        <Card.Body>
          <Card.Text>
           <h6>{item.description}</h6>
           <p small className="text-muted">Stock: { item.stock}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Container><ItemCount stock={item.stock}/></Container>
        </Card.Footer>

      </div>
    </Container>


  );
}

export default Item;