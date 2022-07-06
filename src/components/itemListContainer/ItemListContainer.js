import React from 'react';
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from '../itemList/ItemList';
import { useEffect, useState } from 'react';


function ItemListContainer() {
  const [info, setInfo]=  useState([0]);
  useEffect( ()=>{
   setTimeout(()=>{
     fetch('../data/data.json',{
       headers:{
         "Content-Type": "application/json",
         Accept: "application/json",
       },
 })
     .then((resp) => resp.json())
     .then((data) => {setInfo(data)})
   },1000)

 },[])

  return (
    <div>

      <ItemList info={info}/>


    </div>

  );
}

export default ItemListContainer;
