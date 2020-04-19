import React from "react";

import {
  Container,
  M3,
  TitleContainer,
  FightCorona,
  LabelText,
  LabelsContainer,
} from "./styledComponents";

function Header(props) {
  return (
    <Container>
      <TitleContainer>
        <M3>M3</M3>
        Fresh.
      </TitleContainer>
      <LabelsContainer>
        <LabelText>#Mahbubnagar</LabelText>
        <LabelText>#MCRHRD</LabelText>
        <LabelText>#MEPMA</LabelText>
      </LabelsContainer>
    </Container>
  );
}

export default Header;
