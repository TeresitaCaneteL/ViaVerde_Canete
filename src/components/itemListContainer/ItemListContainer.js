import React from 'react';
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from '../itemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../services/firestore'
//import { getFirestore } from "firebase/firestore";




function ItemListContainer() {
  const [info, setInfo]=  useState([0]);
  const { catId } = useParams();

 //const db = getFirestore();

  useEffect( ()=>{
    catId ?
    getProduct().then((data) => {setInfo(data.filter((item)=> item.categoria === catId))})
    :
      getProduct().then((data)=>{setInfo(data)
      })
      .catch((error)=>{
        console.error(error);
      })





   {/* catId ?
   setTimeout(()=>{
     fetch('../data/data.json',{
       headers:{
         "Content-Type": "application/json",
         Accept: "application/json",
       },
 })
     .then((resp) => resp.json())
     .then((data) => {setInfo(data.filter((item)=> item.categoria === catId))})

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

  },1000)

 },[catId])*/}

},
[catId]
)

  return (
    <div>
      <ItemList info={info}/>
    </div>

  );
}

export default ItemListContainer;
