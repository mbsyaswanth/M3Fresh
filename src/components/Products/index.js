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
            quantity={
              state.cart[product.product_id]
                ? state.cart[product.product_id].quantity
                : undefined
            }
            onAdd={() => {
              dispatch({
                type: "ADD_ITEM",
                cartItem: { productId: product.product_id, quantity: 1 },
              });
            }}
            increment={() => {
              console.log("hi");
            }}
            decrement={() => {
              console.log("hello");
            }}
          />
        ))}
      </ProductsContainer>
    </div>
  );
}

export default Products;
