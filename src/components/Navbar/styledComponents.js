import styled from "styled-components";

export const StyledNavBarContainer = styled.div`
  background: #d7e6d0;
  padding: 10px 16px;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 33px;
  color: #178e1c;
  text-align: left;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 99;
  box-shadow: 1px 0px 5px #178e1c;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const Badge = styled.div`
  background-color: orange;
  width: 11px;
  color: #fff;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 11px;
  position: absolute;
  top: 2px;
  right: -5px;
  border-radius: 50%;
`;

export const CartIconContainer = styled.div`
  align-self: flex-end;
  position: relative;
`;
