import { Fragment, useContext } from 'react';
import { Outlet} from 'react-router-dom';
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import {NavigationContainer,LogoContainer,NavLinks,NavLink } from './navigation.styles';
import { userSignOut } from '../../utils/Firebase/firebase.utils';
import CartICon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectCurrentUSer } from '../../store/user/user.selector';
import { useSelector } from 'react-redux';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {
  const currentUSer=useSelector(selectCurrentUSer)
  const {isCartOpen}=useContext(CartContext);
  //const signOutHandler=async()=>{
   // await userSignOut();
    //setCurrentUSer(null);
 // }; 
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
          { currentUSer ? (<NavLink as="span" onClick={userSignOut}>Sign OUT</NavLink>)            
          :
          (<NavLink to='/auth'> SIGN IN</NavLink>)
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