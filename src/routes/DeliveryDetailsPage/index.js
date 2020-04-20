import React, { useContext } from "react";
import firebase from "firebase";

import { StoreContext, CartContext } from "../../App";
import UserDetailForm from "../../components/UserDetailForm";

function DeliveryDetailsPage() {
  const [state, dispatch] = useContext(StoreContext);
  const [cart, setCart] = useContext(CartContext);
  const sendOrderToFirebase = (userDetails) => {
    const baseOrdersReference = firebase.database().ref("orders");
    const orderRef = baseOrdersReference.push();
    const order = {
      cart: cart,
      ...userDetails,
      orderId: orderRef.key,
    };
    orderRef.set(order);
  };

  return <UserDetailForm onClickPlaceOrder={sendOrderToFirebase} />;
}

export default DeliveryDetailsPage;
