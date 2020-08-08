import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux' 
import {ReactComponent as Logo} from '../../assets/suit.svg';
import {auth} from '../../firebase/firebase.util';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to={process.env.PUBLIC_URL + '/'}>
        <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to={process.env.PUBLIC_URL + '/shop'}>SHOP</Link>
            {   currentUser ?
           ( <div className='option' onClick={()=> auth.signOut()}>Sign Out</div>)
            :
            (<Link className='option' to= {process.env.PUBLIC_URL + '/sign-in-up'}>Sign In</Link>)
            }
        </div>
    </div>
);
const mapStatetoProps = state => ({
    currentUser:state.user.currentUser
})
export default connect(mapStatetoProps)(Header);
