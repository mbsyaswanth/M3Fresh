import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase";

import InvoiceDetails from "../../components/InvoiceDetails";
import { getFormattedDate } from "../../utils/DateUtils";
import { StoreContext } from "../../App";

function InvoiceDetailsPage(props) {
  const [orderResponse, setOrderResponse] = useState("");
  const [state, dispatch] = useContext(StoreContext);
  let params = useParams();
  useEffect(() => {
    firebase
      .database()
      .ref("orders")
      .child(params.orderId)
      .once("value")
      .then((snapshot) => {
        setOrderResponse(snapshot.val());
      });
  }, []);

  const getTotalCost = () => {
    const costArray = Object.values(orderResponse.cart).map(
      (cartItem) => state.stocks[cartItem.productId].price * cartItem.quantity
    );
    return costArray.reduce((total, currentValue) => total + currentValue, 0);
  };

  if (orderResponse && state.stocks) {
    var dateObj = new Date(orderResponse.timeStamp);
    var date = getFormattedDate(dateObj);
    const order = {
      orderId: params.orderId,
      userName: orderResponse.userName,
      phoneNumber: orderResponse.phone_number,
      address: orderResponse.address,
      items: Object.values(orderResponse.cart).map((item) => {
        return {
          name: state.stocks[item.productId].product_name,
          quantity: item.quantity,
          price: state.stocks[item.productId].price,
        };
      }),
      totalPrice: getTotalCost(),
      date: date,
    };
    return (
      <div>
        <InvoiceDetails orderDetails={order} />
      </div>
    );
  }
  return null;
}

export default InvoiceDetailsPage;
