import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 2em;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em;
`;

const TopTexts = styled.div`
  background-color: #000000;
  padding: 1.2em;
  border-radius: 2em;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3em;
`;
const TopText = styled.span`
  cursor: pointer;
  font-size: 1.2rem;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
`;

const Info = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Product = styled.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  justify-content: space-between;
  border-radius: 2em;
  width: 95%;
  ${mobile({ flexDirection: "column", "min-width": "100%" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "min-width": "100%",
  })}
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "text-align": "center",
  })}
`;

const ProductName = styled.span`
  font-size: 1rem;
  font-weight: 700;
  ${mobile({
    "margin-bottom": "1em",
  })}
`;

const ProductId = styled.span`
  ${mobile({
    display: "none",
  })}
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  ${mobile({
    "margin-bottom": "1em",
  })}
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;

  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  ${mobile({
    "margin-top": "2em",
  })}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Annoucement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopTexts>
            <TopText textis="SHOPPINGBAG">Shopping Bag (2)</TopText>
            <TopText textis="WISHLIST">Your Wishlist (0)</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>JESSIE THUNDER SHOES</ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>HAKURA T-SHIRT</ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
