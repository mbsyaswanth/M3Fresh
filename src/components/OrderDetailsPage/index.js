import React, { useState, useEffect } from "react";

import {
  OrdersContainer,
  OrdersHeading,
  NextContainer,
  CartTotalHeading,
  CartTotal,
  NextButton,
} from "./styledComponents";

import OrderItem from "./OrderItem";
import Header from "../Header";

function OrderDetailsPage(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <>
    <Header/>
      <OrdersContainer>
        <OrdersHeading>Order Summary</OrdersHeading>
        <OrderItem itemName="Carrot" price="25" count={1} unit="KG" />
        <OrderItem itemName="Carrot" price="25" count={1} unit="KG" />
        <OrderItem itemName="Carrot" price="25" count={1} unit="KG" />
        <OrderItem itemName="Carrot" price="25" count={1} unit="KG" />
        <OrderItem itemName="Carrot" price="25" count={1} unit="KG" />
      </OrdersContainer>
      <NextContainer>
        <CartTotalHeading>
          Total: <CartTotal> ₹ 100</CartTotal>
        </CartTotalHeading>
        <NextButton>Next</NextButton>
      </NextContainer>
    </>
  );
}

export default OrderDetailsPage;
