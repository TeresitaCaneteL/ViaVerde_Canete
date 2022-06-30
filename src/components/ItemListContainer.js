import React from 'react';
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import ItemList from './ItemList';



function ItemListContainer() {
  return (
    <Container>
         <ItemList/>
    </Container>

  );
}

export default ItemListContainer;
