import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 4em;
  ${mobile({
    height: "100%",
  })}
`;

const Wrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  background-color: #ffffff;
  color: #1d3557;
  ${mobile({
    gap: "1em",
    "flex-direction": "column",
  })}
`;

const Language = styled.div`
  font-size: 1rem;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 1em;
  ${mobile({
    flex: 0,
    width: "100%",
    "justify-content":"center",
  })}
`;
const SearchContainer = styled.div`
  display: flex;
  margin-left: 1em;
  border: 1px solid lightgrey;
  padding: 0.5em;
  border-radius: 2em;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1em;
  margin-right: 1em;
  



  ${mobile({
    flex: 0,
   gap: "3em",
    "margin":"0 auto",
    width: "90%",
    "border-radius":"2em",
    "justify-content": "center",
    "background-color": "#000000",
    color: "#ffffff",
    "padding":"0.5em"
  })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({
    flex: 0,
    width: "100%",
  })}
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 90%;
  &:focus {
    outline: none;
  }
  ${mobile({
    width: "100%",
  })}
`;

const Logo = styled.h1`
  font-size: 1.5em;
  font-weight: 900;
`;

const MenuItem = styled.div`
  font-size: 1rem;
  cursor: pointer;

`;
  const shoppingCartStyle = {
      color: "#ffffff",
  };

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>FASHONISTA</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <SearchIcon />
            <Input placeholder="Search for Product, Items"></Input>
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>SIGN UP</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="success">
              <ShoppingBagRoundedIcon
                color="action"
                style={shoppingCartStyle}
              />
            </Badge>
          </MenuItem>
          <Language>EN</Language>
        </Right>
      </Wrapper>
    </Container>
  );
}
