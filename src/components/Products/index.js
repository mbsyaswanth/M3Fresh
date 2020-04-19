import React, { useContext, useState } from "react";

import useCustomInputHandler from "../../customHooks/useInputHandler";
import { StoreContext } from "../../App";

import ItemCard from "../ItemCard";
import NavBar from "../Navbar";

import { ProductsContainer, StyledInput, Container } from "./styledComponents";

function Products(props) {
  const [state, dispatch] = useContext(StoreContext);
  const [cart, setCart] = useState({});
  const [values, handleChange] = useCustomInputHandler({ filterText: "" });
  const getFilteredProducts = () => {
    return state.stocks.filter((stock) =>
      stock.product_name.toLowerCase().includes(values.filterText.toLowerCase())
    );
  };
  const renderProductsList = () => {
    const filteredProducts = getFilteredProducts();
    return filteredProducts.map((product) => (
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
          if (cart[product.product_id].quantity === 1) {
            setCart((prev) => {
              delete prev[product.product_id];
              return prev;
            });
          }
        }}
      />
    ));
  };
  return (
    <div>
      <NavBar showCart={true} count={Object.keys(cart).length} />
      <Container>
        <StyledInput
          name={"filterText"}
          onChange={handleChange}
          value={values.filterText}
          placeholder={"Search..."}
        />
      </Container>
      <ProductsContainer>{renderProductsList()}</ProductsContainer>
    </div>
  );
}

export default Products;
