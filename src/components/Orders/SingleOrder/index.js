import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  OrderContainer,
  OrderDetailsContainer,
  ViewOrderButton,
  OrderUser,
  OrderDetailsText,
  OrderMediumText,
} from "./styledComponents";
import { goToInvoiceDetailsPage } from "../../../utils/RouteUtils";

function SingleOrder(props) {
  const history = useHistory();
  return (
    <OrderContainer>
      <OrderDetailsContainer>
        <OrderUser>{props.username}</OrderUser>
        <OrderDetailsText>OrderId: {props.orderId}</OrderDetailsText>
        <OrderDetailsText>Phone: {props.phoneNumber}</OrderDetailsText>
        <OrderDetailsText>
          Order placed at{" "}
          <OrderMediumText>{props.formatedDateTime}</OrderMediumText>
        </OrderDetailsText>
      </OrderDetailsContainer>
      <ViewOrderButton
        onClick={() => goToInvoiceDetailsPage(history, props.orderId)}
      >
        View Order
      </ViewOrderButton>
    </OrderContainer>
  );
}

export default SingleOrder;
