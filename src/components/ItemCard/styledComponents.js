import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 364px;
  background: #e7ffdc;
  box-shadow: 3px 4px 4px rgba(23, 142, 28, 0.36),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 15px;
`;

export const Image = styled.img`
  height: 148px;
  background: #c4c4c4;
  border-radius: 10px;
`;

export const ItemName = styled.h3`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 5px;
  color: #178e1c;
  text-align: left;
`;

export const Price = styled.h4`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 5px;
  color: #178e1c;
  text-align: left;
`;

export const Quantity = styled(Price)``;

export const AddToCart = styled.button`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  color: white;
  background-color: #178e1c;
  padding: 10px 15px;
  border-radius: 4px;
  border: none;
  :hover {
    background-color: #156e1b;
  }
`;

export const QuantityButton = styled.button`
  background: #9fd7af;
  border-radius: 8px;
  border: none;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  padding: 5px 10px;
  color: #178e1c;
  :hover {
    background-color: #8ed6ad;
  }
`;

export const QtyCount = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #178e1c;
  padding: 5px;
  margin: 0 5px;
  min-width: 25px;
`;
