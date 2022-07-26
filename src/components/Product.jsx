import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  border-radius: 2em;
`;

const Container = styled.div`
  flex: 1;
  margin: 0.5em;
  min-width: 22%;
  height: 25em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fcfcfc;
  position: relative;
  border-radius: 2em;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  &:hover ${Info} {
    opacity: 1;
    background: rgba(255, 255, 255, 0.23);
    border-radius: 2em;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  ${mobile({
    "min-width": "100%",
  })}
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;

`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #00ffff;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
