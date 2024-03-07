"use client";
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
import { useRouter } from "next/navigation";

const Wrapper = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  color: ${({ selected }) => (selected ? Pink2 : Pink)};
  align-items: center;
  width: 100%;
  position: relative;
  background-color: ${({ selected }) => (selected ? BlueDark : "#282727")};
`;

const Berry = styled.div`
  background-color: red;
  width: 12px;
  height: 12px;
  border-radius: 20px;
  position: absolute;
  right: 20px;
  display: flex;
  justify-content: center;
`;

type Props = {
  route: Route;
  selected: boolean;
  setRoute: (route: Route) => void;
  notificationNumb?: number;
};

export default function Option(props: Props) {
  const { route, selected, setRoute, notificationNumb } = props;
  const router = useRouter();

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

  const selectOption = () => {
    setRoute(route);
    router.push(route.toLocaleLowerCase());
  };

  const getBerry = () => {
    if (notificationNumb === undefined) return <></>;
    if (notificationNumb === 0) return <></>;
    return (
      <Berry>
        <Text>{notificationNumb}</Text>
      </Berry>
    );
  };

  return (
    <Wrapper onClick={selectOption} selected={selected}>
      {getBerry()}
      {getImage()}
      <Text>{route}</Text>
    </Wrapper>
  );
}
