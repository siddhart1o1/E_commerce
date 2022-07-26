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
    margin: "0 auto",
    width: "100%",
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center",
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
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "box-shadow": "none",
    "align-items": "center",
    "justify-content": "center",
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
  flex-direction: column;
  gap: 0.5em;
  ${mobile({
    width: "80%",
    flexDirection: "column",
  })}
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
    "min-width": "80%",
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
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <TitleMain>FASIONISTA</TitleMain>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
