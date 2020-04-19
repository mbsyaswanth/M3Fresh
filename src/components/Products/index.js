import React, { useState, useEffect } from "react";

import { ProductsContainer } from "./styledComponents";
import ItemCard from "../ItemCard";
import NavBar from "../Navbar";

function Products(props) {
  return (
    <div>
      <NavBar />
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
