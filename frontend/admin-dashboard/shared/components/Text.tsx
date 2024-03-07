import React from "react";
import styled from "styled-components";
import { Pink } from "@shared/colors";

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

const CustomText = styled.span<{ size: TextSize }>`
  font-size: ${({ size }) => getSize(size)};
  color: ${Pink};
`;

type TextSize = "small" | "medium" | "big";

type Props = {
  children: React.ReactNode;
  size?: TextSize;
};

export default function Text(props: Props) {
  const { children, size } = props;
  return <CustomText size={size ?? "small"}>{children}</CustomText>;
}
