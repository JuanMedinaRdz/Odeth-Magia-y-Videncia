import { BlueDark, Green, Pink, Pink2 } from "@shared/colors";
import React from "react";
import styled from "styled-components";
import { Text } from "@shared/components";

const Wrapper = styled.div`
  display: flex;
  width: -webkit-fill-available;
  height: 25px;
`;

const Button = styled.div<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? Pink2 : Pink)};
  color: ${({ selected }) => (selected ? Green : BlueDark)};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
  selectedOption: string;
  setSelected: (option: string) => void;
};
function BottomBar({ selectedOption, setSelected }: Props) {
  const buttonsText = ["NUEVOS", "PUBLICOS", "GUARDADOS"];

  return (
    <Wrapper>
      {buttonsText.map((text) => {
        const selected = selectedOption === text;
        return (
          <Button
            selected={selected}
            onClick={() => setSelected(text)}
            key={text}
          >
            <Text color={selected ? "green" : "secondary"}>{text}</Text>
          </Button>
        );
      })}
    </Wrapper>
  );
}

export default BottomBar;
