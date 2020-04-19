import React from "react";
import { useHistory } from "react-router-dom";

import { goToHomePage } from "../../utils/RouteUtils";
import Products from "../../components/Products";

const ProductsPage = () => {
  const history = useHistory();
  return <Products />;
};

export default ProductsPage;
