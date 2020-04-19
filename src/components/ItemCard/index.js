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
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmZrZK7PlIXRsRxgl2ad6lA30hHILvQuU0dX95CkULSHlG4sfb&usqp=CAU"
        alt="item image"
      />
      <ItemDetailsContainer>
        <ItemName>Carrot</ItemName>
        <PriceAndQuantityContainer>
          <Price>₹100/kg</Price>
          {props.quantity > 0 ? (
            <Quantity>
              <QuantityButton onClick={() => setCount(count - 1)}>
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
