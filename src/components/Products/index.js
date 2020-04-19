import React, { useContext, useState } from "react";
import {SyncLoader} from "react-spinners"
import { useHistory } from "react-router-dom";

import useCustomInputHandler from "../../customHooks/useInputHandler";
import { StoreContext, CartContext } from "../../App";
import { goToCartSummaryPage } from "../../utils/RouteUtils";

import ItemCard from "../ItemCard";
import NavBar from "../Navbar";

import {
  ProductsContainer,
  StyledInput,
  Container,
  GoToCart,
  LoaderContainer
} from "./styledComponents";

function Products(props) {
  const history = useHistory();
  const [state, dispatch] = useContext(StoreContext);
  const [cart, setCart] = useContext(CartContext);
  const [values, handleChange] = useCustomInputHandler({ filterText: "" });
  const getFilteredProducts = () => {
    return Object.values(state.stocks).filter((stock) =>
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

  const renderLoader =() => {
    return <LoaderContainer><SyncLoader size={7} margin={1} color={'#178e1c'}/></LoaderContainer>
  }
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
        <ProductsContainer>{renderProductsList()}</ProductsContainer>
      </Container>
      <ProductsContainer>{state.loading === 200 ? renderProductsList() : renderLoader()}</ProductsContainer>
      {/* TODO: need to add this button */}
      {/* <GoToCart onClick={() => goToCartSummaryPage(history)}>
        Go To Cart
      </GoToCart> */}
    </div>
  );
}

export default Products;
