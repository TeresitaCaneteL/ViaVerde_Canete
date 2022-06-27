import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Button} from 'react-bootstrap';
import { useState } from 'react';

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
    setDisable(false)
    if(num>0){
      setNum(num - 1);
      if(num===1){
        setDisable(true)
        console.log(num)
      }

    }


  }
  const reiniciar = () => {
    setNum(0);
    setDisable(true)
  }
  return (
    <div className="mb-4">
      <p>{num}</p>
      <Button variant="outline-secondary" size="d-grid gap-2" onClick={sumar}>+</Button>
      <Button variant="outline-secondary" size="d-grid gap-2" onClick={restar}>-</Button>


      <div>
         <Button variant="secondary" disabled={disable} size="d-grid gap-2">Agregar al carro</Button>
         <Button variant="secondary" size="d-grid gap-2" onClick={reiniciar}>Eliminar del carro</Button>
      </div>
    </div>
  );
}

export default ItemCount;