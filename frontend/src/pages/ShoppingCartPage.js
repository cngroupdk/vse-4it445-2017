import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ShoppingCart } from '../components/ShoppingCart/ShoppingCart';
import { removeProductFromCart } from '../components/ShoppingCart/actions';

export class ShoppingCartPageRaw extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    removeProductFromCart: PropTypes.func.isRequired,
  };

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
