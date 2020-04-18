import React, { useState, useEffect } from "react";

import {
  Image,
  Container,
  ItemName,
  Price,
  Quantity,
  AddToCart,
} from "./styledComponents";

function ItemCard() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <Container>
      <Image alt="item image" />
      <ItemName>Carrot</ItemName>
      <Price>Price : 100/kg</Price>
      <Quantity>
        Quantity : <input type="number" />
      </Quantity>
      <AddToCart onClick={() => setCount(count + 1)}>Add To Cart</AddToCart>
    </Container>
  );
}

export default ItemCard;
