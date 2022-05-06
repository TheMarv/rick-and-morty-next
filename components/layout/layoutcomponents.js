import styled from "styled-components";

export const StyledMain = styled.main`
  background-image: url("/rickAndMortyBackground.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  padding: 3rem 1rem;
`;

export const StyledH1 = styled.h1`
  font-family: rickAndMortyFonts;
  text-shadow: 1px 2px 3px yellow;
  color: ${({ theme }) => theme.colors.fontColor};
`;

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgb(234, 149, 14);
`;
