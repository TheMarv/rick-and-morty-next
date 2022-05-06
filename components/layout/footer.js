import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 1.5rem;
  background-color: rgb(234, 149, 14);
`;

export const StyledFooterText = styled.a`
  font-family: rickAndMortyFonts;
  font-size: 1.8rem;
  color: rgb(44, 169, 167);
  text-shadow: 1px 2px 3px yellow;
  text-decoration: none;
  cursor: pointer;
`;
