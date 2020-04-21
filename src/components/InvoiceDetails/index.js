import React from "react";
import {
  InvoiceDetailsContainer,
  InvoiceContainer,
  BillDetailsText,
  DetailsContainer,
  Item,
  ItemName,
  ItemPrice,
  Separator,
  TotalItemContainer,
  UserDetails,
  OderId,
  ShippingDetails,
  PrintInvoiceButton,
  DateAndTime,
} from "./styledComponents";
import Navbar from "../Navbar";

function InvoiceDetails(props) {
  const renderEachItemDetails = () => {
    return props.orderDetails.items.map((item, index) => (
      <Item isFirst={index === 0}>
        <ItemName>{`${item.name}  x  ${item.quantity}`}</ItemName>
        <ItemPrice>{item.price}</ItemPrice>
      </Item>
    ));
  };
  return (
    <InvoiceDetailsContainer>
      <Navbar />
      <InvoiceContainer>
        <OderId>{`ORDER#${props.orderDetails.orderId}`}</OderId>
        <DateAndTime>{`Order was placed on ${props.orderDetails.date}`}</DateAndTime>
        <ShippingDetails>
          <BillDetailsText>{`Shipping Details`}</BillDetailsText>
          <UserDetails>
            <ItemName>{props.orderDetails.userName},</ItemName>
            <ItemName>{props.orderDetails.phoneNumber},</ItemName>
            <ItemName>{props.orderDetails.address}.</ItemName>
          </UserDetails>
        </ShippingDetails>
        <BillDetailsText>Bill Details</BillDetailsText>
        <DetailsContainer>
          {renderEachItemDetails()}
          <Separator />
          <TotalItemContainer>
            <ItemName>Total</ItemName>
            <ItemPrice>₹ {props.orderDetails.totalPrice}</ItemPrice>
          </TotalItemContainer>
        </DetailsContainer>
        <PrintInvoiceButton
          text={`Print Invoice`}
          onClick={() => {
            window.print();
          }}
        />
      </InvoiceContainer>
    </InvoiceDetailsContainer>
  );
}

export default InvoiceDetails;
