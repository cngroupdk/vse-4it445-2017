import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ShoppingCart } from '../components/ShoppingCart/ShoppingCart';

export class ShoppingCartPageRaw extends Component {
  render() {
    const { items } = this.props;

    return <ShoppingCart items={items} />;
  }
}

const mapStateToProps = state => ({
  items: state.shoppingCart.items,
});

export const ShoppingCartPage = connect(mapStateToProps)(ShoppingCartPageRaw);
