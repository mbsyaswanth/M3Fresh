import React, { useContext } from "react";

import useCustomInputHandler from "../../customHooks/useInputHandler";
import { StoreContext } from "../../App";

import ItemCard from "../ItemCard";
import NavBar from "../Navbar";

import { ProductsContainer, StyledInput, Container } from "./styledComponents";

function Products(props) {
  const [state, dispatch] = useContext(StoreContext);
  const [values,handleChange] = useCustomInputHandler({filterText:''})
  const getFilteredProducts=()=>{
    return state.stocks.filter(stock => stock.product_name.includes(values.filterText))
  }
  const renderProductsList=()=>{
    const filteredProducts = getFilteredProducts()
    return filteredProducts.map((product) => (
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
    ))
  }
  return (
    <div>
      <NavBar />
      <Container>
      <StyledInput name={'filterText'} onChange={handleChange} value={values.filterText} placeholder={'Search...'}/>
      </Container>
      <ProductsContainer>
        {renderProductsList()}
      </ProductsContainer>
    </div>
  );
}

export default Products;
