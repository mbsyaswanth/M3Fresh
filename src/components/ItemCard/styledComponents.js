import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: #e7ffdc;

  border-radius: 8px;
  box-sizing: border-box;
`;

export const Image = styled.img`
  height: 100px;
  background: #c4c4c4;
  border-radius: 8px;
`;

export const ItemDetailsContainer = styled.span`
  padding: 8px 5px;
`;

export const ItemName = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #178e1c;
  text-align: left;
  margin: 0;
  padding-bottom: 5px;
`;

export const PriceAndQuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.h4`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #178e1c;
  text-align: left;
  margin: 0;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

export const AddToCart = styled.button`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: white;
  background-color: #178e1c;
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  :hover {
    background-color: #156e1b;
  }
`;

export const QuantityButton = styled.button`
  background: #9fd7af;
  border-radius: 5px;
  border: none;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  padding: 2px 6px;
  color: #178e1c;
  :hover {
    background-color: #8ed6ad;
  }
`;

export const QtyCount = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #178e1c;
  padding: 5px;
  margin: 0 5px;
  min-width: 15px;
  text-align: center;
`;
