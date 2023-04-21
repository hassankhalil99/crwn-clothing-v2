import { useContext } from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartICon=()=>{
    const {cartCount}=useContext(CartContext)

    const{isCartOpen,setIsCartOpen}=useContext(CartContext)
    const toggleCart=()=>{
        setIsCartOpen(!isCartOpen)
    }

    return(
        <div className="cart-icon-container" onClick={toggleCart}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartCount}</span>
        </div>

    )
}
export default CartICon;