import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup} from 'react-bootstrap';
import { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock, initial=1, onAdd }) {
  const [num, setNum] = useState(initial);

  const sumar = () => {

    if(num<stock){
      setNum(num + 1);
    }
  }
  const restar = () => {

    if(num>0){
      setNum(num - 1);

    }
  }
  //const reiniciar = () => {
   // setNum(0);
  //}
  return (
    <div className="container-group">
      <ButtonGroup aria-label="Basic example">
       <Button variant="outline-dark" onClick={sumar}>+</Button>
       <Button variant="outline-dark" disabled="true">{num}</Button>
       <Button variant="outline-dark"onClick={restar}>-</Button>
     </ButtonGroup>
     <p/>

         <ButtonGroup aria-label="Basic example">
         <Button variant="success" onClick={()=> onAdd(num)} disabled={num===0 ? true : false}>Agregar al carro</Button>
       </ButtonGroup>
    </div>
  );
}

export default ItemCount;