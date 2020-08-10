import React from 'react';
import './checkout-item.styles.scss'
import {clearItemFromCart, removeItem, addItem} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';

const CheckoutItem =({cartItem, clearItem, addItem, removeItem
    }) => {
    const {name, quantity,imageUrl,price} = cartItem;
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl}
                 alt='item' />
                 <span className='name'>{name}</span>
        </div>
    
        <span className='quantity'>
            <div onClick={()=> removeItem(cartItem)} className='arrow'>&#10094;</div>
            {quantity}
            <div onClick={()=> addItem(cartItem)} className='arrow'>&#10095;</div>
            </span>
    <span className='price'>{price}</span>
        <span onClick={()=> clearItem(cartItem)} className='remove-button'>&#10005;</span>
    </div>
);
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});
export default connect(null, mapDispatchToProps) (CheckoutItem);