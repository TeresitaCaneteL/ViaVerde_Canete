import React from 'react';
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from '../itemList/ItemList';
import { useEffect, useState } from 'react';


function ItemListContainer() {
  const [info, setInfo]=  useState([])
  useEffect( ()=>{
   setTimeout(()=>{
     fetch('./data/data.json',{
       headers:{
         "Content-Type": "application/json",
         Accept: "application/json",
       },
 })
     .then((resp) => resp.json())
     .then((data) => {setInfo(data)})
   },2000)

 },[])

  return (
    <>

      <ItemList info={info}/>


    </>

  );
}

export default ItemListContainer;
