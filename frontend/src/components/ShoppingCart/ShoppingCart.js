import React, { Component } from 'react';

import { CartItem } from './CartItem';

export class ShoppingCart extends Component {
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
