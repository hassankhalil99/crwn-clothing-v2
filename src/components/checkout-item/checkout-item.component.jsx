import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";



const CheckoutItem=({cartItem})=>{

    const {name,imageUrl,price,quantity}=cartItem
    const {AddItemToCart,removeItemFromCart,clearItemFromCart}=useContext(CartContext);
    const ClearCartHandler=()=>clearItemFromCart(cartItem)
    const addItemHandler=()=>AddItemToCart(cartItem)
    const removeItemHandler=()=>removeItemFromCart(cartItem)
    return(

        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeItemHandler}>
                    &#10094;
                </div>
                <div className="value">{quantity}</div>   
                <div className="arrow" onClick={addItemHandler}>
                     &#10095;
                </div>
                </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={ClearCartHandler}>&#10005;</div>
        </div>
    )
}


export default CheckoutItem;