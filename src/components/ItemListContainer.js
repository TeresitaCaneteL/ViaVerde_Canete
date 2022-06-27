import React, { Component } from 'react';
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import ItemCount from './ItemCount';


function ItemListContainer({ greeting }) {
  return (
    <div>
      <Container>
         <h2>{ greeting }</h2>
         <ItemCount stock={10}/>
      </Container>
    </div>

  );
}

export default ItemListContainer;
