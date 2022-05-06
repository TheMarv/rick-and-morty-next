import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { StyledMain, StyledH1, StyledHeader } from "./layoutcomponents";

/* const CharacterDetailsText = styled.div`
  padding: 1.5rem;
`; */

export default function Layout({ children }) {
  return (
    <>
      <StyledHeader>
        <StyledH1>Rick and Morty</StyledH1>
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
    </>
  );
}
