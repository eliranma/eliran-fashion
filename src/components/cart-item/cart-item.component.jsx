import React from 'react';
import {CartItemContainer, PriceItem, ItemImg, ItemDetails, ItemName} from './cart-item.styles';

const CartItem = ({item: {imageUrl, price, name, quantity} }) =>  (
    <CartItemContainer>
        <ItemImg src={imageUrl} alt='item' />
        <ItemDetails>
            <ItemName className="name">{name}</ItemName>
            <PriceItem>
                {quantity} * ${price}
                </PriceItem>
        </ItemDetails>
    </CartItemContainer>
);
export default CartItem;