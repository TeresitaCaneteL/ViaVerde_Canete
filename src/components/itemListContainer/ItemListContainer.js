import React from 'react';
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from '../itemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function ItemListContainer() {
  const [info, setInfo]=  useState([0]);
  const { catId } = useParams();
  useEffect( ()=>{
    catId ?
   setTimeout(()=>{
     fetch('../data/data.json',{
       headers:{
         "Content-Type": "application/json",
         Accept: "application/json",
       },
 })
     .then((resp) => resp.json())
     .then((data) => {setInfo(data.filter((item)=> item.categoria === catId))})
     console.log(setInfo)
   },1000):

   setTimeout(()=>{
    fetch('../data/data.json',{
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json",
      },
})
    .then((resp) => resp.json())
    .then((data) => {setInfo(data)})
    console.log(setInfo)
  },1000)

 },[])

  return (
    <div>
      <ItemList info={info}/>
    </div>

  );
}

export default ItemListContainer;
