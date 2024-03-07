import React from "react";
import styled, { CSSProp } from "styled-components";
import { Green, Pink, Pink2 } from "@shared/colors";

const getSize = (size: TextSize): string => {
  switch (size) {
    case "small":
      return "0.625rem";
    case "medium":
      return "1rem";
    case "big":
      return "1.5rem";
  }
};

const getColor = (color: TextColor): string => {
  switch (color) {
    case "primary":
      return Pink;
    case "secondary":
      return Pink2;
    case "green":
      return Green;
  }
};

const CustomText = styled.span<TextFormat>`
  font-size: ${({ size }) => getSize(size)};
  color: ${({ color }) => getColor(color)};
  ${({ styles }) => styles}
`;

type TextSize = "small" | "medium" | "big";
type TextColor = "primary" | "secondary" | "green";

type TextFormat = {
  size: TextSize;
  color: TextColor;
  styles?: CSSProp;
};

type Props = {
  children: React.ReactNode;
  size?: TextSize;
  color?: TextColor;
  styles?: CSSProp;
};

export default function Text(props: Props) {
  const { children, size = "small", color = "primary", styles } = props;

  return (
    <CustomText size={size} color={color} styles={styles}>
      {children}
    </CustomText>
  );
}
