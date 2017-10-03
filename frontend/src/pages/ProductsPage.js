import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';

import { ProductList } from '../components/ProductList/ProductList.js';

export class ProductsPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get(`${API_URL}/products`).then(res => {
      const { products } = res.data;
      this.setState({ products });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <div className="jumbotron">
          <h1>All Products</h1>
        </div>
        <ProductList products={products}/>
      </div>
    );
  }
}
