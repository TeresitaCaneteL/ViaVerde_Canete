import { useRef,useContext,useState  } from 'react';
import { CartContext } from '../context/Context.js';
import OrderCart from '../orderCart/OrderCart.js';
import { Modal, Form,Button } from "react-bootstrap"
import {collection, getFirestore, addDoc} from 'firebase/firestore'

const OrderModal = ({props, tot, show,handleClose} ) => {
  //console.log(props, tot,'hola');
  const { cart, clearCart } = useContext(CartContext);
  const [ ordenId, setOderId ] = useState("0");

  const nameRef = useRef()
  const phoneRef = useRef()
  const emailRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    const order = {
      "buyer": {
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        email: emailRef.current.value,
      },
      "items": [{title:props.newItem.title, price:props.newItem.price, quantity:props.quantity}],
      "date": Date().toLocaleString() + '',
      "total": tot
  };

 //console.log(order, props.newItem.title)
  const db = getFirestore();
  const orderCollection= collection(db, "orders")
  addDoc(orderCollection,order).then(({id})=> setOderId(id));
  //console.log(ordenId)
  handleClose()

  }
  return (
    <div>
       <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Orden de compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control ref={nameRef} type="text" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Telefono</Form.Label>
            <Form.Control  ref={phoneRef} type="number" required min={0} step={1}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Mail</Form.Label>
            <Form.Control  ref={emailRef} type="email" required min={0} step={1}/>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Agregar
            </Button>
          </div>
        </Modal.Body>
      </Form>

    </Modal>

    <OrderCart {...cart} id ={ordenId} item={props}/>
    {console.log(cart, props)}
    </div>
  );
};

export default OrderModal;