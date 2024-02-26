"use client";
import { BlueDark, Pink, Pink2 } from "@shared/colors";
import { gutter } from "@shared/constants";
import styled from "styled-components";
import InputElement from "./InputElement";
import { useEffect } from "react";

const TitleSection = styled.div`
  margin: 6% 0;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${BlueDark};
`;

const Role = styled.h2`
  font-size: 1rem;
  color: ${BlueDark};
  text-align: center;
  margin: 8px 0;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Card = styled.section`
  box-sizing: border-box;
  height: 60%;
  width: 80%;
  border-radius: 12px;
  background-color: ${BlueDark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Avatar = styled.div`
  width: 97px;
  height: 97px;
  border-radius: 50px;
  background: ${Pink};
  margin: ${gutter("big")} 0;
  border: 2px solid ${Pink2};
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const LoginBtn = styled.button`
  width: 83px;
  height: auto;
  border-radius: 12px;
  background-color: ${Pink};
  border: 2px solid ${Pink2};
`;

const Recovery = styled.span`
  color: ${Pink};
  font-size: 10px;
  margin-top: ${gutter("double")};
`;

const LoginScreen = () => {
  useEffect(() => {
    document.body.style.backgroundColor = Pink;

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <Background>
      <TitleSection>
        <Title>Magia Videncia</Title>
        <Role>Administrador</Role>
      </TitleSection>
      <Card>
        <Avatar />
        <InputElement
          username=""
          password=""
          setUser={() => {}}
          setPw={() => {}}
        />
        <Buttons>
          <LoginBtn>LOGIN</LoginBtn>
          <Recovery>recuperar contraseña</Recovery>
        </Buttons>
      </Card>
    </Background>
  );
};

export default LoginScreen;
