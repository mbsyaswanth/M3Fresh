import React, { useState } from "react";

import Input from "../Input";

import Button from "../Button";

import { Container, AddessInput } from "./styledComponents";

function UserDetailForm(props) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const onClickPlaceOrder = () => {
    const obj = {
      name: name,
      phone_number: phoneNumber,
      address: address,
    };
    props.onClickPlaceOrder(obj);
  };

  return (
    <Container>
      <Input
        value={name}
        onChange={handleChangeName}
        placeholder={"Full Name"}
      />
      <Input
        value={phoneNumber}
        onChange={handleChangePhoneNumber}
        placeholder={"Mobile Number"}
      />
      <AddessInput
        value={address}
        onChange={handleChangeAddress}
        placeholder={"Address"}
      />

      <Button text={"Place Order"} onClick={onClickPlaceOrder} />
    </Container>
  );
}

export default UserDetailForm;
