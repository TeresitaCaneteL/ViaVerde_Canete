import Item from './Item.js';
import './ItemList.css';
import ItemCount from './ItemCount.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import { useEffect, useState } from 'react';

function ItemList() {
  const [info, setInfo]=  useState([])
   useEffect( ()=>{
    setTimeout(()=>{
      fetch('data.json',{
        headers:{
          "Content-Type": "application/json",
          Accept: "application/json",
        },
  })
      .then((resp) => resp.json())
      .then((data) => {setInfo(data)})
    },3000)

  },[])
  return (
    <Container fluid="md">
       <div className="row">
         {info && info.map((item) =>{
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
