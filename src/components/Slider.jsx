import React from "react";
import styled from "styled-components";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useState } from "react";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 3em;
  height: 3em;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.5s ease-in-out;
  transform: translateX(${(props) => props.SlideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  ${mobile({
    "flex-direction": "column",
  })}
`;
const ImageContainer = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin-right: 7em;
  flex: 1;
  ${mobile({
    width: "100%",
    margin: "0 auto",
  })}
`;
const Image = styled.img`
  height: 80%;
  ${mobile({
    height: "60%",
  })}
`;
const InfoContainer = styled.div`
  width: 40%;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 5em;
  ${mobile({
    margin: "0 auto",
    width: "100%",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center",
    padding: "0px",
  })}
`;
const Title = styled.h1`
  font-size: 8rem;
  font-weight: 900;
  max-width: 50%;
  ${mobile({
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center",
    "margin-bottom": "1em",
    "font-size": "3rem",
    "text-align": "center",
    width: "100%",
  })}
`;
const Desc = styled.p`
  max-width: 50%;
  margin: 0.7em 0px;
  font-size: 1.5rem;
  ${mobile({
    display: "none",
    padding: "0px",
  })}
`;
const Button = styled.button`
  padding: 0.8em;
  background-color: #00ffdd;
  color: #000000;
  border: none;
  border-radius: 2em;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 800;
  width: 10em;
`;

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("LEFT")}>
        <ArrowBackIosNewRoundedIcon></ArrowBackIosNewRoundedIcon>
      </Arrow>
      <Wrapper SlideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("RIGHT")}>
        <ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>
      </Arrow>
    </Container>
  );
}
