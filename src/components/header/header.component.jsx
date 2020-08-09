import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux' 
import {ReactComponent as Logo} from '../../assets/suit.svg';
import {auth} from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
        <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to= '/shop'>Shop</Link>
            <Link className='option' to= '/contact'>Contact</Link>
            {   currentUser ?
           ( <div className='option' onClick={()=> auth.signOut()}>Sign Out</div>)
            :
            (<Link className='option' to= '/sign-in-up'>Sign In</Link>)
            }
            <CartIcon  />
        </div>
       {hidden ? null : <Cart />}
    </div>
);
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});
export default connect(mapStateToProps)(Header);