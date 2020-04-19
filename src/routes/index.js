import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./HomePage";
import ProductsPage from "./ProductsPage";
import CartSummaryPage from "./CartSummaryPage";
import DeliveryDetailsPage from "./DeliveryDetailsPage";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/products" component={ProductsPage} />
      <Route exact path="/cart" component={CartSummaryPage} />
      <Route exact path="/delivery-details" component={DeliveryDetailsPage} />
    </Switch>
  );
};
