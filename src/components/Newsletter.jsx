import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  height: 60vh;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2em;
`;
const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 0.2em;
  ${mobile({
    "font-size": "3rem",
  })}
`;

const Desc = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1em;
  text-align: center;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 3em;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 2em;
  ${mobile({
    width: "100%",
  })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  border-radius: 2em;
  padding-left: 2em;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  flex: 1;
  border-radius: 2em;
  border: none;
  background-color: #00ffff;
  color: #000000;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
