import React from "react";
import {
    NavContainer,
    StyledH1,
    NavLinks,
    StyledButton,
    StyledLink,
    StyledButtonA,
} from "./style";

function Header() {
    return (
        <>
            <NavContainer>
                <StyledLink href="/#root">
                    <StyledH1>DriftKarts Wilamowice</StyledH1>
                </StyledLink>
                <NavLinks>
                    <StyledButton href="/videos">Filmiki</StyledButton>
                    <StyledButtonA href="/#map">Mapa</StyledButtonA>
                    <StyledButton href="/#photos">Zdjęcia</StyledButton>
                </NavLinks>
            </NavContainer>
        </>
    );
}

export default Header;
