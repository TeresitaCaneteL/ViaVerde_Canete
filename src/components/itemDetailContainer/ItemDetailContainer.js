import {useState } from 'react';
import ItemList from '../itemList/ItemList'


function ItemDetailContainer(){
  const [item, itemFetch]=useState([])
  const fetchItem =()=>{
    fetch('./data/data.json',{
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json",
      },
})
      .them((response)=>response.json())
      .them((data)=>itemFetch(data))
  }
return(
  <div className="container">
    <button onClick={fetchItem}>Ver Productos</button>
    <ItemList cards={itemFetch}/>

  </div>
)
}
export default ItemDetailContainer;