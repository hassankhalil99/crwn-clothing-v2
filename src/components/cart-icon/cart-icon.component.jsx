import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer , ShoppingIcon,ItemCount } from "./cart-icon.styles";


const CartICon=()=>{
    const {cartCount}=useContext(CartContext)

    const{isCartOpen,setIsCartOpen}=useContext(CartContext)
    const toggleCart=()=>{
        setIsCartOpen(!isCartOpen)
    }

    return(
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}
export default CartICon;