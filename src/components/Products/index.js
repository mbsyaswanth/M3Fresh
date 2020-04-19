import React, { useContext, useState } from "react";
import {SyncLoader} from "react-spinners"

import useCustomInputHandler from "../../customHooks/useInputHandler";
import { StoreContext } from "../../App";

import ItemCard from "../ItemCard";
import NavBar from "../Navbar";

import { ProductsContainer, StyledInput, Container, LoaderContainer } from "./styledComponents";

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
        }}
      />
    ));
  };

  const renderLoader =() => {
    return <LoaderContainer><SyncLoader size={7} margin={1} color={'#178e1c'}/></LoaderContainer>
  }
  return (
    <div>
      <NavBar />
      <Container>
        <StyledInput
          name={"filterText"}
          onChange={handleChange}
          value={values.filterText}
          placeholder={"Search..."}
        />
      </Container>
      <ProductsContainer>{state.loading === 200 ? renderProductsList() : renderLoader()}</ProductsContainer>
    </div>
  );
}

export default Products;
