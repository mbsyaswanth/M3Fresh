import React from "react";
import { useHistory } from "react-router-dom";

import { goToHomePage } from "../../utils/RouteUtils";

import {
  StyledNavBarContainer,
  CartIconContainer,
  Badge,
} from "./styledComponents";
import CartIcon from "./CartIcon";

function Navbar(props) {
  const history = useHistory();
  return (
    <StyledNavBarContainer>
      <span onClick={() => goToHomePage(history)}>M3Fresh.</span>
      {props.showCart && props.count > 0 ? (
        <CartIconContainer>
          <Badge>{props.count}</Badge>
          <CartIcon />
        </CartIconContainer>
      ) : null}
    </StyledNavBarContainer>
  );
}

export default Navbar;
