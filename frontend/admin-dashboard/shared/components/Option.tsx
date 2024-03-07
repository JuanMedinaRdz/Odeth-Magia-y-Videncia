import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  Dashboard,
  DashboardSelected,
  Cursos,
  CursosSelected,
  Testimonios,
  TestimoniosSelected,
  Settings,
  SettingsSelected,
  AgendaSelected,
  Agenda,
} from "@public/navbar";
import Text from "./Text";
import { BlueDark, Pink, Pink2 } from "@shared/colors";
import { Route } from "@shared/types";

const Wrapper = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  color: ${({ selected }) => (selected ? Pink2 : Pink)};
  align-items: center;
  width: 100%;
  background-color: ${({ selected }) => (selected ? BlueDark : "#282727")};
`;

type Props = {
  route: Route;
};

export default function Option({ route }: Props) {
  const selected = route === "Agenda";

  const getImage = (): React.ReactNode => {
    let image = selected ? DashboardSelected : Dashboard;
    switch (route) {
      case "Cursos":
        image = selected ? CursosSelected : Cursos;
        break;
      case "Testimonios":
        image = selected ? TestimoniosSelected : Testimonios;
        break;
      case "Agenda":
        image = selected ? AgendaSelected : Agenda;
        break;
      case "Settings":
        image = selected ? SettingsSelected : Settings;
        break;
    }

    return (
      <Image
        src={image}
        alt={route}
        style={{ minWidth: "20px", minHeight: "30px", marginBottom: "4px" }}
      />
    );
  };

  return (
    <Wrapper selected={selected}>
      {getImage()}
      <Text>{route}</Text>
    </Wrapper>
  );
}
