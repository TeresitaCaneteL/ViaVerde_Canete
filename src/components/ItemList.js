import Item from './Item.js';
import './ItemList.css';
import ItemCount from './ItemCount.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';


function ItemList({info}) {
  return (
    <Container fluid="md">
       <div className="row">
         {info?.map((item) =>{
          return (
              <Item key={ item.id } item={ item } />
          )
         }
       )}
      </div>
    </Container>

  );
}

export default ItemList;
