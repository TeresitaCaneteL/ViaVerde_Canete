import ItemCount from './ItemCount.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container} from 'react-bootstrap';

function Item({ item }) {
  return (

      <div className="col-md-4">
      <Card className="card card-body " style={{ width: '18rem' }} border="dark">

        <Card.Title>{item.title}</Card.Title>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Text>
            {item.description}
            <h5>Precio: { item.price}</h5>
            <small className="text-muted">Stock: { item.stock}</small>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button className="card-text"><ItemCount stock={item.stock}/></button>
        </Card.Footer>

    </Card>
  </div>

  );
}

export default Item;