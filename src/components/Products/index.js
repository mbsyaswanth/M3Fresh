import React, { useContext } from "react";
import { SyncLoader } from "react-spinners";
import { useHistory } from "react-router-dom";

import useCustomInputHandler from "../../customHooks/useInputHandler";
import { StoreContext } from "../../App";
import { goToCartSummaryPage } from "../../utils/RouteUtils";

import ItemCard from "../ItemCard";
import NavBar from "../Navbar";

import {
  ProductsContainer,
  StyledInput,
  Container,
  GoToCart,
  LoaderContainer,
} from "./styledComponents";

export const renderLoader = () => {
  return (
    <LoaderContainer>
      <SyncLoader size={7} margin={1} color={"#178e1c"} />
    </LoaderContainer>
  );
};

function Products(props) {
  const history = useHistory();
  const [state, dispatch] = useContext(StoreContext);
  const [values, handleChange] = useCustomInputHandler({ filterText: "" });
  const getFilteredProducts = () => {
    return Object.values(state.stocks).filter((stock) =>
      stock.product_name.toLowerCase().includes(values.filterText.toLowerCase())
    );
  };
  const renderProductsList = () => {
    const filteredProducts = getFilteredProducts();
    return filteredProducts
      .sort((a, b) => a.productId < b.productId)
      .map((product) => (
        <ItemCard
          key={product.product_id}
          name={product.product_name}
          image={product.product_image}
          price={product.price}
          units={product.units}
          quantity={state.cart[product.product_id]?.quantity}
          onAdd={() => {
            dispatch({
              type: "ADD_ITEM",
              cartItem: {
                productId: product.product_id,
                quantity: 1,
              },
            });
          }}
          increment={() => {
            dispatch({
              type: "INCREMENT_CART_ITEM",
              productId: product.product_id,
            });
          }}
          decrement={() => {
            dispatch({
              type: "DECREMENT_CART_ITEM",
              productId: product.product_id,
            });
            if (state.cart[product.product_id].quantity === 1) {
              dispatch({
                type: "DELETE_CART_ITEM",
                productId: product.product_id,
              });
            }
          }}
        />
      ));
  };
  return (
    <div>
      <NavBar showCart={true} count={Object.keys(state.cart).length} />
      <Container>
        <StyledInput
          type="search"
          name={"filterText"}
          onChange={handleChange}
          value={values.filterText}
          placeholder={"Search..."}
        />
        <ProductsContainer>
          {state.loading === 200 ? renderProductsList() : renderLoader()}
        </ProductsContainer>
      </Container>

      {/* TODO: need to add this button */}
      {Object.keys(state.cart).length > 0 && (
        <GoToCart onClick={() => goToCartSummaryPage(history)}>
          Go To Cart
        </GoToCart>
      )}
    </div>
  );
}

export default Products;
