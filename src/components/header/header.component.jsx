import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux' 
import {ReactComponent as Logo} from '../../assets/suit.svg';
import {auth} from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to= '/'>
        <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to= '/shop'>Shop</Link>
            <Link className='option' to= '/contact'>Contact</Link>
            {   currentUser ?
           ( <div className='option' onClick={()=> auth.signOut()}>Sign Out</div>)
            :
            (<Link className='option' to=  '/sign-in-up'>Sign In</Link>)
            }
            <CartIcon  />
        </div>
       {hidden ? null : <CartDropdown />}
    </div>
);
<<<<<<< HEAD
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});
export default connect(mapStateToProps)(Header);
=======
const mapStatetoProps = state => ({
    currentUser:state.user.currentUser
})
export default connect(mapStatetoProps)(Header);
>>>>>>> 8a4e026eba5fccdfacdd5e677b6c1952a4071053
