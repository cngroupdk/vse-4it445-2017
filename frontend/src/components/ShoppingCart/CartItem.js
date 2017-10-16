import React, { Component } from 'react';

export class CartItem extends Component {
  render() {
    const { product, count } = this.props;

    return (
      <h4 className="row">
        <div className="col-sm-4">{product.title}</div>
        <div className="col-sm-3 text-right">{count}&times;</div>
        <div className="col-sm-4 text-right">{product.price}&nbsp;Kč</div>
        <div className="col-sm-1 text-right">
          <button type="button" className="btn btn-link btn-xs">
            <span className="glyphicon glyphicon-trash" />
          </button>
        </div>
      </h4>
    );
  }
}
