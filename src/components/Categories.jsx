import React from "react";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
  padding: 1em;
  justify-content: space-between;
`;

export default function Categories() {
  return (
    <Container>
      {categories.map((item) => {
        return <CategoryItem key={item.id} item={item} />;
      })}
    </Container>
  );
}
