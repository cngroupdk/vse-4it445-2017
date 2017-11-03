import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ProductList } from '../components/ProductList/ProductList.js';
import { startProductListFetch } from '../components/ProductList/actions';

class ProductsPage extends Component {
  componentDidMount() {
    const { startProductListFetch } = this.props;
    startProductListFetch();
  }

  render() {
    const { isLoading, products, error } = this.props;

    if (isLoading) {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }

    if (error) {
      return (
        <div>
          <h2>Error</h2>
          <div>{`${error}`}</div>
        </div>
      );
    }

    return (
      <div>
        <div className="jumbotron">
          <h1>All Products</h1>
        </div>
        <ProductList products={products} />
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  const { productList } = storeState;
  const {
    isLoading,
    products,
    error,
  } = productList;

  return {
    isLoading,
    products,
    error,
  };
};

const ProductsPageContainer = connect(
  mapStateToProps,
  {
    startProductListFetch,
  }
)(ProductsPage);

export default ProductsPageContainer;
