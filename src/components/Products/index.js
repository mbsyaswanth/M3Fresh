import React, { useContext, useState } from "react";
import { SyncLoader } from "react-spinners";
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
  LoaderContainer,
  SearchFilters,
} from "./styledComponents";
import SearchFilter from "../SearchFilter";
import { productFilters } from "./constants";

export const renderLoader = () => {
  return (
    <LoaderContainer>
      <SyncLoader size={7} margin={1} color={"#178e1c"} />
    </LoaderContainer>
  );
};

function Products(props) {
  const history = useHistory();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [state, dispatch] = useContext(StoreContext);
  const [cart, setCart] = useContext(CartContext);
  const [values, handleChange] = useCustomInputHandler({ filterText: "" });

  const getFilteredProducts = () => {
    return Object.values(state.stocks).filter((stock) => {
      if (selectedFilters.length === 0) {
        return stock.product_name
          .toLowerCase()
          .includes(values.filterText.toLowerCase());
      } else {
        return (
          selectedFilters.includes(
            productFilters[stock.product_id.charAt(0).toLowerCase()]
          ) &&
          stock.product_name
            .toLowerCase()
            .includes(values.filterText.toLowerCase())
        );
      }
    });
  };

  const renderProductsList = () => {
    const filteredProducts = getFilteredProducts();
    return filteredProducts
      .sort((a, b) => a.product_id < b.product_id)
      .map((product) => (
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

  const onClickFilter = (filter) => {
    const filters = [...selectedFilters];
    if (filters.indexOf(filter) > -1) {
      filters.splice(filters.indexOf(filter), 1);
    } else {
      filters.push(filter);
    }
    setSelectedFilters(filters);
  };

  return (
    <div>
      <NavBar
        showCart={true}
        heading={"Products"}
        count={Object.keys(cart).length}
      />
      <SearchFilters>
        {Object.values(productFilters).map((filter) => (
          <SearchFilter
            key={filter}
            onClick={() => onClickFilter(filter)}
            isSelected={selectedFilters.includes(filter)}
            text={filter}
          />
        ))}
      </SearchFilters>
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
      {Object.keys(cart).length > 0 && (
        <GoToCart onClick={() => goToCartSummaryPage(history)}>
          Go To Cart
        </GoToCart>
      )}
    </div>
  );
}

export default Products;
