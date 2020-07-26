import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import Input from "../Input";

import Button from "../Button";

import useCustomInputHandler from "../../customHooks/useInputHandler";

import {
  Container,
  AddressInput,
  OrderStatusContainer,
  OrderStatusHeading,
  ContactInformation,
  ViewInvoiceText,
  PlaceOtherOrderButton,
  RemarksInput,
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
    remarks: "",
  });

  const history = useHistory();

  const onClickPlaceOrder = () => {
    const obj = {
      userId: firebase.auth().currentUser.uid,
      userName: values.userName,
      phone_number: values.phoneNumber,
      address: values.address,
      remarks: values.remarks,
    };
    props.onClickPlaceOrder(obj);
  };

  const uiConfig = {
    autoUpgradeAnonymousUsers: true,
    // Popup signin flow rather than redirect flow.
    signInFlow: "redirect",
    // // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/products",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      {
        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        defaultCountry: "IN",
      },
    ],
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        var user = authResult.user;
        var credential = authResult.credential;
        var isNewUser = authResult.additionalUserInfo.isNewUser;
        var providerId = authResult.additionalUserInfo.providerId;
        var operationType = authResult.operationType;
        // Do something with the returned AuthResult.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      signInFailure: function (error) {
        console.log("firebase signin failure :", error);
        // For merge conflicts, the error.code will be
        // 'firebaseui/anonymous-upgrade-merge-conflict'.
        if (error.code != "firebaseui/anonymous-upgrade-merge-conflict") {
          return Promise.resolve();
        }
        // The credential the user tried to sign in with.
        var cred = error.credential;
        // If using Firebase Realtime Database. The anonymous user data has to be
        // copied to the non-anonymous user.
        var app = firebase.app();
        // Save anonymous user data first.
        var anonymousUser = firebase.auth().currentUser;
        return firebase
          .auth()
          .signInWithCredential(cred)
          .then(function (user) {
            // Delete anonymnous user.
            return anonymousUser.delete();
          });
      },
    },
  };

  const renderOrderStatus = () => {
    return (
      <>
        <OrderStatusContainer>
          <OrderStatusHeading>Order Received</OrderStatusHeading>
          <ContactInformation>
            Please contact{" "}
            <b>
              <a href={`tel:+91 9553050607`}>9553050607</a>
            </b>{" "}
            or{" "}
            <b>
              <a href={`tel:08542 252203`}>08542-252203</a>
            </b>{" "}
            for any queries
          </ContactInformation>
          <ViewInvoiceText>
            <Link to={`invoice-details/${props.orderId}`}>Click here </Link> to
            view your Order Invoice.
          </ViewInvoiceText>
        </OrderStatusContainer>

        <PlaceOtherOrderButton onClick={() => goToHomePage(history)}>
          Place Another Order
        </PlaceOtherOrderButton>
        {firebase.auth().currentUser.isAnonymous ? (
          <div>
            <p>Please sign-in to save your orders for future:</p>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        ) : (
          ""
        )}
      </>
    );
  };

  const formSubmit = (event) => {
    event.preventDefault();
    onClickPlaceOrder();
  };

  const renderPlaceOrder = () => {
    return (
      <form onSubmit={formSubmit} name="Delivery Details" data-netlify="true">
        <Input
          required
          type="text"
          name={"userName"}
          value={values.userName}
          onChange={handleChange}
          placeholder={"Full Name"}
        />
        <Input
          required
          type="tel"
          name={"phoneNumber"}
          value={values.phoneNumber}
          onChange={handleChange}
          placeholder={"Mobile Number"}
        />
        <AddressInput
          required
          type="text"
          name={"address"}
          value={values.address}
          onChange={handleChange}
          placeholder={"Address"}
        />
        <RemarksInput
          type="text"
          name={"remarks"}
          value={values.remarks}
          onChange={handleChange}
          placeholder={"Remarks"}
        />

        {props.orderStatus === networkCallStatus.loading ? (
          <BeatLoader size={10} margin={5} color={"#178e1c"} />
        ) : (
          <Button type="submit" text={"Place Order"} />
        )}
      </form>
    );
  };

  return (
    <>
      <NavBar heading={"Delivery Details"} />
      <Container>
        {props.orderStatus === networkCallStatus.success
          ? renderOrderStatus()
          : renderPlaceOrder()}
      </Container>
    </>
  );
}

export default UserDetailForm;
