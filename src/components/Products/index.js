import React, { useState, useEffect } from "react";

import { ProductsContainer } from "./styledComponents";
import ItemCard from "../ItemCard";
import { NavBar } from "../OrderDetailsPage/styledComponents";

function Products(props) {
  return (
    <div>
      <NavBar>M3Fresh.</NavBar>
      <ProductsContainer>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </ProductsContainer>
    </div>
  );
}

export default Products;
