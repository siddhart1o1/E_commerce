import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 0.8em;
  padding: 0.5em;
  background-color: #00ffea;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1rem;
`;

export default function Annoucement() {
  return <Container>Annoucement</Container>;
}
