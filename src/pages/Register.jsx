import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    height: "100%",
    width: "100%",
  })}
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 3em;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 2em;
  ${mobile({
    height: "100%",
    width: "100%",
    "box-shadow":"none"
  })}
`;
const TitleMain = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.4em;
`;
const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1em;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 0.5em;
  padding: 1em;
  border-radius: 2em;
  outline: none;
  border: 1px solid #ccc;
  ${mobile({
    "min-width": "100%",
  })}
`;


const Agreement = styled.span`
  font-size: 1rem;
  margin: 20px 0px;
  margin-bottom: 2em;
  ${mobile({
    margin: "0 auto%",
  })}
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  border: none;
  padding: 1.1em;
  background-color: aqua;
  color: #000000;
  cursor: pointer;
  border-radius: 2em;
  font-size: 1rem;
  font-weight: 700;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <TitleMain>FASHIONISTA</TitleMain>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
