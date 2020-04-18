import styled from "styled-components";
import Input from "../Input";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background-color: #e7ffec;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AddessInput = styled.textarea`
  width: 100%;
  margin-bottom: 10px;
  box-sizing: border-box;
  height: 80px;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  border: none;
  font-size: 15px;
  font-weight: bold;
  font-family: "Roboto";
  box-shadow: 0px 0px 2px 1px #178e1c;
  color: #178e1c;
`;
