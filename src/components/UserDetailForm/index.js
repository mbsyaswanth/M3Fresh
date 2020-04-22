import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BeatLoader } from "react-spinners";

import Input from "../Input";

import Button from "../Button";

import useCustomInputHandler from "../../customHooks/useInputHandler";

import {
  Container,
  AddessInput,
  OrderStatusContainer,
  OrderStatusHeading,
  ContactInformation,
  ViewInvoiceText,
  PlaceOtherOrderButton,
} from "./styledComponents";

import NavBar from "../Navbar";
import OrderReceivedIcon from "../../icons/OrderReceivedIcon";
import { goToHomePage } from "../../utils/RouteUtils";
import { networkCallStatus } from "../../utils/CommonUtils";

function UserDetailForm(props) {
  const [values, handleChange] = useCustomInputHandler({
    userName: "",
    phoneNumber: "",
    address: "",
  });

  const history = useHistory();

  const onClickPlaceOrder = () => {
    const obj = {
      userName: values.userName,
      phone_number: values.phoneNumber,
      address: values.address,
    };
    props.onClickPlaceOrder(obj);
  };

  const renderOrderStatus = () => {
    return (
      <>
        <OrderStatusContainer>
          <OrderStatusHeading>Order Received</OrderStatusHeading>
          <OrderReceivedIcon />
          <ContactInformation>
            Please contact{" "}
            <b>
              <a href={`tel:+91 9553050607`}>9553050607</a>
            </b>{" "}
            or <b>08542-252203</b> for any queries
          </ContactInformation>
          <ViewInvoiceText>
            <Link to={`invoice-details/${props.orderId}`}>Click here</Link>
            to view your Order Invoice.
          </ViewInvoiceText>
        </OrderStatusContainer>

        <PlaceOtherOrderButton onClick={() => goToHomePage(history)}>
          Place Another Order
        </PlaceOtherOrderButton>
      </>
    );
  };

  const renderPlaceOrder = () => {
    return (
      <>
        <Input
          name={"userName"}
          value={values.userName}
          onChange={handleChange}
          placeholder={"Full Name"}
        />
        <Input
          name={"phoneNumber"}
          value={values.phoneNumber}
          onChange={handleChange}
          placeholder={"Mobile Number"}
        />
        <AddessInput
          name={"address"}
          value={values.address}
          onChange={handleChange}
          placeholder={"Address"}
        />

        {props.orderStatus === networkCallStatus.loading ? (
          <BeatLoader size={10} margin={5} color={"#178e1c"} />
        ) : (
          <Button text={"Place Order"} onClick={onClickPlaceOrder} />
        )}
      </>
    );
  };

  return (
    <>
      <NavBar />
      <Container>
        {props.orderStatus === networkCallStatus.success
          ? renderOrderStatus()
          : renderPlaceOrder()}
      </Container>
    </>
  );
}

export default UserDetailForm;
