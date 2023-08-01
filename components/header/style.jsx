import Link from "next/link";
import { styled } from "styled-components";

export const NavContainer = styled.nav`
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 1px solid lightgray;
`;

export const NavLinks = styled.div`
    width: 60%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledH1 = styled.h1`
    font-family: Consolas;
    position: relative;
    margin: 0;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0%;
        height: 0.15em;
        background-color: black;
        border-radius: 15px;
        transition: 0.3s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: unset;
`;

export const StyledButton = styled(Link)`
    text-decoration: none;
    color: unset;
    font-size: 20px;
    font-family: Consolas;
    margin: 1px;
    margin-right: 10%;
    padding: 5px;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 0.15em;
        background-color: black;
        border-radius: 15px;
        transition: 0.3s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }
`;

export const StyledButtonA = styled.a`
    text-decoration: none;
    color: unset;
    font-size: 20px;
    font-family: Consolas;
    margin: 1px;
    margin-right: 10%;
    padding: 5px;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 0.15em;
        background-color: black;
        border-radius: 15px;
        transition: 0.3s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }
`;
