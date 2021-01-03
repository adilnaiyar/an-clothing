import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom'

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../Redux/cart/cart.selector';
import { toggleCartHidden } from '../../Redux/cart/cart.actions.js';

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
  EmptyCartDropdownContainer
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  cartItems.length ? (
      <CartDropdownContainer>
        <CartItemsContainer>
      
        {cartItems.map(cartItem => 
          <CartItem key={cartItem.id} item={cartItem} />
        )}
        </CartItemsContainer>
        <CartDropdownButton
          onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
          }} 
          >
          GO TO CHECKOUT
        </CartDropdownButton>

      </CartDropdownContainer>
    ) : (
          <EmptyCartDropdownContainer>
            <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
          </EmptyCartDropdownContainer>
    )

)
      
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
