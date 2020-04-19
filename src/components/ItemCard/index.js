import React, { useState, useEffect } from "react";

import {
  Image,
  Container,
  ItemName,
  Price,
  Quantity,
  AddToCart,
  QuantityButton,
  QtyCount,
  ItemDetailsContainer,
  PriceAndQuantityContainer,
} from "./styledComponents";

function ItemCard(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <Container>
      <Image src={props.image} alt="item image" />
      <ItemDetailsContainer>
        <ItemName>{props.name}</ItemName>
        <PriceAndQuantityContainer>
          <Price>
            ₹{props.price}/{props.units}
          </Price>
          {props.quantity > 0 ? (
            <Quantity>
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
            </Quantity>
          ) : (
            <AddToCart onClick={() => setCount(count + 1)}>Add</AddToCart>
          )}
        </PriceAndQuantityContainer>
      </ItemDetailsContainer>
    </Container>
  );
}

export default ItemCard;
