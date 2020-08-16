import React from 'react';
import {CartIconContainer, ShoppingIcon, ItemsCount} from './cart-icon.styles';
import {connect} from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {createStructuredSelector} from 'reselect';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden} >
        <ShoppingIcon className='shopping-icon'  />
<ItemsCount>{itemCount}</ItemsCount>
    </CartIconContainer>
);
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});
export default connect (mapStateToProps,
    mapDispatchToProps)(CartIcon);