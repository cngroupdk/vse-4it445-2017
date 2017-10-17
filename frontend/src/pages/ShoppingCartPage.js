import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ShoppingCart } from '../components/ShoppingCart/ShoppingCart';
import { removeProductFromCart } from '../components/ShoppingCart/actions';

export class ShoppingCartPageRaw extends Component {
  render() {
    const { items, removeProductFromCart } = this.props;

    return (
      <ShoppingCart
        items={items}
        onRemoveProductFromCart={removeProductFromCart}
      />
    );
  }
}

const mapStateToProps = state => ({
  items: state.shoppingCart.items,
});

const mapDispatchToProps = {
  removeProductFromCart,
};

export const ShoppingCartPage = connect(mapStateToProps, mapDispatchToProps)(
  ShoppingCartPageRaw,
);
