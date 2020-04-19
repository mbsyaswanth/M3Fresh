import React from 'react';

import { NavBar, M3, TitleContainer, FightCorona, LabelText, LabelsContainer } from './styledComponents';

function Header(props) {
    return (
        <NavBar>
            <TitleContainer>
            <M3>
                M3
            </M3>
        Fresh.
        </TitleContainer>
        <LabelsContainer>
        <LabelText>
            #Mahbubnagar
        </LabelText>
        <LabelText>
            #MCRHRD
        </LabelText>
        <LabelText>
            #MEPMA
        </LabelText>
        </LabelsContainer>
        </NavBar>
    );
}

export default Header;