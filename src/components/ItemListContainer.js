import React from 'react';
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';


function ItemListContainer() {
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
    <Container>
         <ItemList info={info}/>
    </Container>

  );
}

export default ItemListContainer;
