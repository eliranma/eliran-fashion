import React from 'react';
// import './header.styles.scss';
// import { Link } from 'react-router-dom';
import {connect} from 'react-redux' 
import {auth} from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import  {HeaderContainer, LogoImg, LogoContainer, OptionsContainer, OptionLink} from './header.styles';




const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to= '/'>
        <LogoImg />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to= '/shop'>Shop</OptionLink>
            <OptionLink className='option' to= '/contact'>Contact</OptionLink>
            {   currentUser ?
           ( <OptionLink as='div' onClick={()=> auth.signOut()}>Sign Out</OptionLink>)
            :
            (<OptionLink to=  '/sign-in-up'>Sign In</OptionLink>)
            }
            <CartIcon  />
        </OptionsContainer>
       {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden:selectCartHidden
});
export default connect(mapStateToProps)(Header);
