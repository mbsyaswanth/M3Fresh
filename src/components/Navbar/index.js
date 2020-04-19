import React from "react";
import { useHistory } from "react-router-dom";

import { goToHomePage } from "../../utils/RouteUtils";

import { StyledNavBarContainer } from "./styledComponents";

function Navbar(props) {
  const history = useHistory();
  return (
    <StyledNavBarContainer>
      <span onClick={() => goToHomePage(history)}>M3Fresh.</span>
    </StyledNavBarContainer>
  );
}

export default Navbar;
