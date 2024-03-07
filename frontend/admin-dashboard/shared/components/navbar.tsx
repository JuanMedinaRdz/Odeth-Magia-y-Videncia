"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Option from "./Option";
import { Route } from "@shared/types";

const Footer = styled.footer`
  display: flex;
  min-height: 50px;
  justify-content: space-evenly;
`;

const Options: Route[] = [
  "Dashboard",
  "Cursos",
  "Testimonios",
  "Agenda",
  "Settings",
];

function NavBar() {
  const [currentRoute, setcurrentRoute] = useState("Dashboard");
  return (
    <Footer>
      {Options.map((route: Route) => {
        const selected = route === currentRoute;
        return (
          <Option
            setRoute={setcurrentRoute}
            selected={selected}
            key={route}
            route={route}
          />
        );
      })}
    </Footer>
  );
}

export default NavBar;
