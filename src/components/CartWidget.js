import { GrCart } from 'react-icons/gr';
import {useContext} from 'react'
import { CartContext } from './CartContext';
import {Link} from "react-router-dom"
const CartWidget=()=> {
    const ctx= useContext(CartContext)
    return(
        <div className="cart ">
      <Link to='/cart' style={{textDecoration:"none"}}> <GrCart/>{ctx.calcItemsQty()} </Link> 
        </div>
    )
}

export default CartWidget;