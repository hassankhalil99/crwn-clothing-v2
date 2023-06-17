import { Fragment, useContext } from 'react';
import { Outlet} from 'react-router-dom';
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import {NavigationContainer,LogoContainer,NavLinks,NavLink } from './navigation.styles';
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
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink  to='/shop'>
            SHOP
          </NavLink>          
          {currentUSer?(<NavLink as="span" onClick={signOutHandler}>Sign OUT</NavLink>)            
          :
          (<NavLink
           to='/auth'>
          SIGN IN
        </NavLink>)
  
        } 
        <CartICon />             
        </NavLinks> 
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;