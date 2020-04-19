import React, { useState, useEffect } from "react";

import {
  Image,
  Container,
  ItemName,
  Price,
  QtyCount,
  AddToCart,
  DetailsContainer,
  Details,
  ItemPrice,
  QuantityContainer,
  QuantityButton,
  Close,
} from "./styledComponents";

function ItemCard(props) {
  const [count, setCount] = useState(props.count);
  //TODO: add order count call back
  return (
    <Container>
      <Close>x</Close>
      <Image src={props.imageUrl} alt="item image" />
      <DetailsContainer>
        <Details>
          <ItemName>{props.itemName}</ItemName>
          <ItemPrice>
            ₹ {props.price} / {props.unit}
          </ItemPrice>
          <QuantityContainer>
            <QuantityButton
              disabled={count <= 0}
              onClick={() => setCount(count - 1)}
            >
              -
            </QuantityButton>
            <QtyCount>{count}</QtyCount>
            <QuantityButton onClick={() => setCount(count + 1)}>
              +
            </QuantityButton>
          </QuantityContainer>
        </Details>
        <Price>₹ {props.price * count}</Price>
      </DetailsContainer>
    </Container>
  );
}

export default ItemCard;
