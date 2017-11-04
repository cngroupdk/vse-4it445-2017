import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoadingIndicator from '../components/common/LoadingIndicator';
import ErrorMessage from '../components/common/ErrorMessage';
import { ProductList } from '../components/ProductList/ProductList.js';
import { startProductListFetch } from '../components/ProductList/actions';
import {
  getProductListState,
  isLoading,
  isLoaded,
  isError,
  getError,
  getProducts,
} from '../components/ProductList/reducer';

class ProductsPage extends Component {
  componentDidMount() {
    const { startProductListFetch } = this.props;
    startProductListFetch();
  }

  render() {
    const { isLoading, isLoaded, isError, products, error } = this.props;

    if (isError && !isLoading) {
      return <ErrorMessage error={error} />;
    }

    if (isLoading && !isLoaded) {
      return <LoadingIndicator />;
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
  const productListState = getProductListState(storeState);

  return {
    isLoading: isLoading(productListState),
    isLoaded: isLoaded(productListState),
    isError: isError(productListState),
    products: getProducts(productListState),
    error: getError(productListState),
  };
};

const ProductsPageContainer = connect(
  mapStateToProps,
  {
    startProductListFetch,
  }
)(ProductsPage);

export default ProductsPageContainer;
