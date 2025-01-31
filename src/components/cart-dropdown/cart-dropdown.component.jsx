import { useContext } from "react";
import Button from "../button/button.component";

import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { CartDropdownContainer ,EmptyMessage,CartItems } from "./cart-dropdown.styles";





const CartDropdown=()=>{
const {cartItems}=useContext(CartContext)
const navigate=useNavigate()
const  gotToCheckoutHandler=()=>{
    navigate('/checkout')
}

    return(
        <CartDropdownContainer>
            <CartItems>
            {
                    cartItems.length ? (cartItems.map((item)=>
                    (<CartItem key={item.id} cartItem={item} />)
                )):
                (<EmptyMessage>Your cart is empty</EmptyMessage>)

            }
            </CartItems>
            <Button buttonType='inverted' onClick={gotToCheckoutHandler} >GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}
export default CartDropdown;