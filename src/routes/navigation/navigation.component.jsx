import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.styles.scss';
import { UserContext } from '../../contexts/user.context';
import { userSignOut } from '../../Firebase/firebase.utils';
import CartICon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {
  const{currentUSer,setCurrentUSer}=useContext(UserContext); 
  const {isCartOpen}=useContext(CartContext);
  const signOutHandler=async()=>{
    await userSignOut();
    setCurrentUSer(null);
  };
  
   
    
  
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          
          {currentUSer?(<span className='nav-link' onClick={signOutHandler}>Sign Out</span>)            
          :
          (<Link className='nav-link' to='/auth'>
          SIGN IN
        </Link>)
  
        } 
        <CartICon />             
        </div> 
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;