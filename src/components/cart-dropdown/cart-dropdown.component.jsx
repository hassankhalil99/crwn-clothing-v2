import { useContext } from "react";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";





const CartDropdown=()=>{
const {cartItems}=useContext(CartContext)
const navigate=useNavigate()
const  gotToCheckoutHandler=()=>{
    navigate('/checkout')
}

    return(
        <div class="cart-dropdown-container">
            <div className="cart-items">

                {cartItems.map((item)=>
                    (<CartItem key={item.id} cartItem={item} />)
                )}
            </div>
            <Button buttonType='inverted' onClick={gotToCheckoutHandler} >GO TO CHECKOUT</Button>
        </div>
    )
}
export default CartDropdown;