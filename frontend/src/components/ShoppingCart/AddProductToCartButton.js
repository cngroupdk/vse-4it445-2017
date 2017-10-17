import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addProductToCart } from './actions';

export class AddProductToCartButtonRaw extends Component {
  render() {
    const { product, addProductToCart } = this.props;

    return (
      <button
        onClick={() => addProductToCart(product)}
        type="button"
        className="btn btn-success"
      >
        <span
          className="glyphicon glyphicon-shopping-cart"
          aria-hidden="true"
        />{' '}
        Add to cart
      </button>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addProductToCart,
};

export const AddProductToCartButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProductToCartButtonRaw);
