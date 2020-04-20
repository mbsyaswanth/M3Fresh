import React, { useState } from "react";

import Input from "../Input";

import Button from "../Button";

import useCustomInputHandler from "../../customHooks/useInputHandler";

import { Container, AddessInput } from "./styledComponents";

import NavBar from "../Navbar";

function UserDetailForm(props) {
  const [values, handleChange] = useCustomInputHandler({
    userName: "",
    phoneNumber: "",
    address: "",
  });

  const onClickPlaceOrder = () => {
    const obj = {
      userName: values.userName,
      phone_number: values.phoneNumber,
      address: values.address,
    };
    props.onClickPlaceOrder(obj);
  };

  return (
    <>
      <NavBar />
      <Container>
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

        <Button text={"Place Order"} onClick={onClickPlaceOrder} />
      </Container>
    </>
  );
}

export default UserDetailForm;
