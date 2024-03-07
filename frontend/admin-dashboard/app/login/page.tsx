"use client";
import { BlueDark, Pink } from "@shared/colors";
import styled from "styled-components";
import { useEffect } from "react";
import StoreProvider from "../storeProvider";
import { CardForm } from "./CardForm";

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
      <CardForm />
    </Background>
  );
};

export default LoginScreen;
