import Item from '../item/Item.js';
import './ItemList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row,Col} from 'react-bootstrap';


function ItemList({info}) {
  return (
     <Container>
      <Row xs={1} md={3} lg={3} >
         {info?.map((item) =>{
          return (
            <Col className="flex-row">
             <Item key={ item.id } item={ item } />
            </Col>
          )
         }
       )}
      </Row>
     </Container>


  );
}

export default ItemList;
