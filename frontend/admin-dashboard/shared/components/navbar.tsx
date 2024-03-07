"use client";
import React from "react";
import styled from "styled-components";
import Option from "./Option";
import { gutter } from "@shared/constants";
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
  return (
    <Footer>
      {Options.map((route: Route) => (
        <Option key={route} route={route} />
      ))}
    </Footer>
  );
}

export default NavBar;
