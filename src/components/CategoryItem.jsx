import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 0.5em;
  height: 70vh;
  border-radius: 2em;
  position: relative;
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2em;
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5em;
`;
const Button = styled.button`
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2em;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.6px);
  -webkit-backdrop-filter: blur(6.6px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  width: 8em;
  height: 2.5em;
  cursor: pointer;
`;

export default function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.img}></Image>
      <Info>
        <Title>{item.title}</Title>
        <Button> SHOP NOW </Button>
      </Info>
    </Container>
  );
}
