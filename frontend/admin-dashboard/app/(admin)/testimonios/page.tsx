"use client";
import BottomBar from "@features/testimonies/components/BottomBar";
import { Pink } from "@shared/colors";
import { Text } from "@shared/components";
import { gutter } from "@shared/constants";
import React, { useState } from "react";
import styled, { css } from "styled-components";

const Testimonios = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const CardsWrapper = styled.div`
  display: grid;
  column-gap: 10px;
  row-gap: 10px;
  grid-template-columns: auto auto;
  max-height: 80vh;
  overflow-y: auto;
  width: -webkit-fill-available;
  justify-content: space-evenly;
`;

const Card = styled.div`
  width: 168px;
  height: 128px;
  background-color: ${Pink};
`;

const titleStyle = css`
  font-weight: bold;
  margin-top: ${gutter()};
`;

export default function Testimonies() {
  const [selected, setSelected] = useState("NUEVOS");

  return (
    <Testimonios>
      <Text size="medium" styles={titleStyle} color="secondary">
        Comentarios Nuevos
      </Text>
      <CardsWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsWrapper>
      <BottomBar selectedOption={selected} setSelected={setSelected} />
    </Testimonios>
  );
}
