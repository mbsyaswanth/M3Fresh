import React, { useContext } from "react";

import { ProductsContainer } from "./styledComponents";
import ItemCard from "../ItemCard";
import NavBar from "../Navbar";
import { StoreContext } from "../../App";

function Products(props) {
  const [state, dispatch] = useContext(StoreContext);

  return (
    <div>
      <NavBar />
      <ProductsContainer>
        {state.stocks.map((product) => (
          <ItemCard
            key={product.product_id}
            name={product.product_name}
            image={product.product_image}
            price={product.price}
            units={product.units}
          />
        ))}
      </ProductsContainer>
    </div>
  );
}

export default Products;
