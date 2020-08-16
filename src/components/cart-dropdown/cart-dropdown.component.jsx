import React from 'react';
import {CartDropdownContainer, CartEmptyMessage, CartItemsContainer, CartDropdownButton} from './cart-dropdown.styles';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions'




    const CartDropdown = ({cartItems, history, dispatch}) => {

        return(
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                ( cartItems.map(cartItem =>(
                    <CartItem key={cartItem.id}
                        item={cartItem} />
                        ))):
                        (<CartEmptyMessage>
                            Your Cart is empty</CartEmptyMessage>)
                        }
        </CartItemsContainer>
        <CartDropdownButton onClick={()=> {history.push('/checkout');
    dispatch(toggleCartHidden());
    }}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
    );
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps) (CartDropdown));