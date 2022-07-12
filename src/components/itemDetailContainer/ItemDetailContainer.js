import React, { useState, useEffect } from 'react';
import  ItemDetail  from '../itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  {/*const [loading, setLoading] = useState(true);*/}

  const { itemId } = useParams();

  useEffect(() => {
    {/*setLoading(true);*/}
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        fetch('../data/data.json',{
          headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
          },
    })
        .then((resp) => resp.json())
        .then((data) => {setProduct(data.find((item) => item.id === itemId))})
        resolve(product);
      }, 300);
    });

    getItems
      .then((res) => {
        setProduct(res);
      })
     {/* .finally(() => setLoading(false));*/}
  }, [itemId]);

  return(
   <>
    {/*loading ? <h2>CARGANDO...</h2> :*/} <ItemDetail {...product}/>

   </>


  )


};
export default ItemDetailContainer;