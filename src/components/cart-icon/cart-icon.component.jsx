import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../Redux/cart/cart.actions';
import { selectCartItemsCount } from '../../Redux/cart/cart.selector';
import { ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className = 'cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className = 'shopping-icon' />
        <span className = 'item-count'>{ itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });

  const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);