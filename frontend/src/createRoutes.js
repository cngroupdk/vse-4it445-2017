import React from 'react';
import { IndexRoute, Route } from 'react-router';

import { AppPage } from './pages/AppPage.js';
import ContactPage from './pages/ContactPage.js';
import { HomePage } from './pages/HomePage.js';
import { NoMatchPage } from './pages/NoMatchPage.js';
import { ProductDetailPage } from './pages/ProductDetailPage.js'
import ProductsPage from './pages/ProductsPage.js';
import { ContactDetail } from './pages/ContactDetail';
import { ShoppingCartPage } from './pages/ShoppingCartPage.js'

export function createRoutes() {
  return (
    <Route path="/" component={AppPage}>
      <IndexRoute component={HomePage}/>
      <Route path="/products">
        <IndexRoute component={ProductsPage}/>
        <Route path=":productId" component={ProductDetailPage}/>
      </Route>
      <Route path="/contact">
        <IndexRoute component={ContactPage}/>
        <Route path=":contactId" component={ContactDetail}/>
      </Route>
      <Route path="/cart" component={ShoppingCartPage}/>
      <Route path="*" component={NoMatchPage}/>
    </Route>
  );
}
