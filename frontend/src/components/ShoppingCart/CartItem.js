import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class CartItem extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
    onRemoveProductFromCart: PropTypes.func.isRequired,
  };

  render() {
    const { product, count, onRemoveProductFromCart } = this.props;

    return (
      <h4 className="row">
        <div className="col-sm-4">{product.title}</div>
        <div className="col-sm-3 text-right">{count}&times;</div>
        <div className="col-sm-4 text-right">{product.price}&nbsp;Kč</div>
        <div className="col-sm-1 text-right">
          <button
            type="button"
            className="btn btn-link btn-xs"
            onClick={() => onRemoveProductFromCart(product.id)}
          >
            <span className="glyphicon glyphicon-trash" />
          </button>
        </div>
      </h4>
    );
  }
}
