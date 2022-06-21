import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';


function ItemListContainer({ greeting }) {
  return (
    <div>
      <Container>
         <h2>{ greeting }</h2>
      </Container>
    </div>

  );
}

export default ItemListContainer;
