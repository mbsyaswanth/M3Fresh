import React, { useContext, useState } from "react";

import { ProductsContainer } from "./styledComponents";
import ItemCard from "../ItemCard";
import NavBar from "../Navbar";
import { StoreContext } from "../../App";

function Products(props) {
  const [state, dispatch] = useContext(StoreContext);
  const [cart, setCart] = useState({});
  console.log(cart);

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
            quantity={cart[product.product_id]?.quantity}
            onAdd={() => {
              setCart({
                ...cart,
                [product.product_id]: {
                  productId: product.product_id,
                  quantity: 1,
                },
              });
            }}
            increment={() => {
              setCart({
                ...cart,
                [product.product_id]: {
                  productId: product.product_id,
                  quantity: cart[product.product_id].quantity + 1,
                },
              });
            }}
            decrement={() => {
              setCart({
                ...cart,
                [product.product_id]: {
                  productId: product.product_id,
                  quantity: cart[product.product_id].quantity - 1,
                },
              });
            }}
          />
        ))}
      </ProductsContainer>
    </div>
  );
}

export default Products;
