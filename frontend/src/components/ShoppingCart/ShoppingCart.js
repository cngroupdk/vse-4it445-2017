import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CartItem } from './CartItem';

export class ShoppingCart extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        product: PropTypes.shape({
          id: PropTypes.number.isRequired,
        }).isRequired,
        count: PropTypes.number.isRequired,
      }),
    ).isRequired,
    onRemoveProductFromCart: PropTypes.func.isRequired,
  };

  render() {
    const { items, onRemoveProductFromCart } = this.props;

    return (
      <div>
        <div className="jumbotron">
          <h1>Shopping Cart</h1>
        </div>

        {items.map(item => (
          <CartItem
            key={item.product.id}
            product={item.product}
            count={item.count}
            onRemoveProductFromCart={onRemoveProductFromCart}
          />
        ))}
      </div>
    );
  }
}
