import React from 'react';
import {ReactComponent as ShoopingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden} >
        <ShoopingIcon className='shopping-icon'  />
<span className='item-count'>{itemCount}</span>
    </div>
);
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});
const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});
export default connect (mapStateToProps,
    mapDispatchToProps)(CartIcon);