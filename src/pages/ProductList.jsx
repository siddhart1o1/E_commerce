import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 0.5em;
  font-weight: 700;
  font-size: 3rem;
  ${mobile({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    fontSize: "3rem",
  })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    "flex-direction": "column",
  })}

`;

const Filter = styled.div`
  margin: 0.5em;
  margin-left: 2em;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 0.5em;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 0.5em;
  border: 1px solid #ccc;
  border-radius: 2em;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Annoucement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
