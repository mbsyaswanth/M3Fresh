import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import {
  OrdersContainer,
  OrdersHeading,
  NextContainer,
  CartTotalHeading,
  CartTotal,
  NextButton,
} from "./styledComponents";

import OrderItem from "./OrderItem";
import Navbar from "../Navbar";

import { StoreContext, CartContext } from "../../App";
import { goToDeliveryDetailsPage } from "../../utils/RouteUtils";
import { createObjectCopy } from "../../utils/CommonUtils";

function OrderDetailsPage(props) {
  const history = useHistory();
  const [state, dispatch] = useContext(StoreContext);
  const [cart, setCart] = useContext(CartContext);

  const getTotalCost = () => {
    const costArray = Object.values(cart).map(
      (cartItem) => state.stocks[cartItem.productId].price * cartItem.quantity
    );
    return costArray.reduce((total, currentValue) => total + currentValue, 0);
  };

  console.log(cart);
  return (
    <>
      <Navbar heading={"Order Summary"} />
      <OrdersContainer>
        {Object.values(cart).map((cartItem) => {
          return (
            <OrderItem
              image={state.stocks[cartItem.productId].product_image}
              itemName={state.stocks[cartItem.productId].product_name}
              price={state.stocks[cartItem.productId].price}
              quantity={cartItem.quantity}
              unit={state.stocks[cartItem.productId].units}
              increment={() => {
                setCart({
                  ...cart,
                  [cartItem.productId]: {
                    productId: cartItem.productId,
                    quantity: cart[cartItem.productId].quantity + 1,
                  },
                });
              }}
              decrement={() => {
                setCart({
                  ...cart,
                  [cartItem.productId]: {
                    productId: cartItem.productId,
                    quantity: cart[cartItem.productId].quantity - 1,
                  },
                });
                if (cart[cartItem.productId].quantity === 1) {
                  setCart((prev) => {
                    const a = createObjectCopy(prev);
                    delete a[cartItem.productId];
                    return a;
                  });
                }
              }}
              onDelete={() => {
                setCart((prev) => {
                  const a = createObjectCopy(prev);
                  delete a[cartItem.productId];
                  return a;
                });
              }}
            />
          );
        })}
      </OrdersContainer>
      {Object.values(cart).length > 0 && (
        <NextContainer>
          <CartTotalHeading>
            Total: <CartTotal> ₹ {getTotalCost()}</CartTotal>
          </CartTotalHeading>
          <NextButton onClick={() => goToDeliveryDetailsPage(history)}>
            Continue
          </NextButton>
        </NextContainer>
      )}
    </>
  );
}

export default OrderDetailsPage;
