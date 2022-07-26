import { Add, Remove } from "@material-ui/icons";
import { padding } from "@mui/system";
import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 2em;
  display: flex;
  ${mobile({
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center",
  })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  border-radius: 2em;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 5em;
  ${mobile({
    padding: "0.5em",
  })}
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 3rem;
  ${mobile({
    display: "none",
  })}
`;

const MobileTitle = styled.h1`
  font-weight: 400;
  font-size: 2rem;
  display: none;
  padding: 1em;
  ${mobile({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "text-align": "center",
  })}
`;

const Desc = styled.p`
  margin: 2em 0px;
  font-size: 1.2rem;
  ${mobile({
    "margin-top": "1em",
    padding: "0",
  })}
`;

const Price = styled.span`
  font-weight: 400;
  font-size: 2rem;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 1em 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1em;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 0.5em;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 1em;
  padding: 0.5em;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  gap: 1em;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  justify-content: center;
  padding: 1em;
  border-radius: 2em;
  flex-direction: column;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  width: 100%;
`;

const Amount = styled.span`
  width: 3em;
  height: 3em;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 0.5em;
  width: 100%;
  border-radius: 2em;
`;

const Button = styled.button`
  padding: 1em;
  border: none;
  background-color: #00ffff;
  border-radius: 2em;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Annoucement />
      <Navbar />
      <Wrapper>
        <MobileTitle>Denim Jumpsuit</MobileTitle>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
