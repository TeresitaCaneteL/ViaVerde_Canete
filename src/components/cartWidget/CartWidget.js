
import { FaCartPlus } from "react-icons/fa";
import './CartWidget.css';

function CartWidget(){
    return(
        <div className='cartWidget'>
           <h3><FaCartPlus style={{color: 'white', fontSize: '50px'}}/></h3>
        </div>
    );
}

export default CartWidget;

