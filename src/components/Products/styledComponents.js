import styled from "styled-components";

import Input from "../Input";

export const ProductsContainer = styled.div`
  display: grid;
  grid-gap: 3%;
  grid-template-columns: repeat(auto-fit, minmax(160px, 180px));
  justify-content: center;
  padding:10px;
  padding-top:0px;
`;

export const StyledInput = styled(Input)`
width:300px;
margin-top:10px;
`

export const Container=styled.div`
padding:10px;
padding-top:85px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing:border-box;
`