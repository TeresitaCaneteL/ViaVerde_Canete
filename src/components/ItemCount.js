import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock, initial=1 }) {
  const [num, setNum] = useState(initial);
  const [disable, setDisable] = useState(false);

  const sumar = () => {

    if(num<stock){
      setNum(num + 1);
      setDisable(false)
    }
  }
  const restar = () => {

    if(num>0){
      setNum(num - 1);

    }
  }
  const reiniciar = () => {
    setNum(0);
  }
  return (
    <div className="input-group botones">

      <span className="input-group-btn">
      <Button variant="outline-secondary" onClick={sumar}>+</Button>
      </span>
      <span className="input-group-btn">{num}</span>
      <span className="input-group-btn">
      <Button variant="outline-secondary" onClick={restar}>-</Button>
      </span>
      <hr/>
      <div>
      <hr/>
        <span className="input-group ">
         <Button className="btn btn-success"  onClick={sumar} disabled={num===0 ? true : false} >Agregar al carro</Button>

         </span>
         <hr/>
      </div>
    </div>
  );
}

export default ItemCount;