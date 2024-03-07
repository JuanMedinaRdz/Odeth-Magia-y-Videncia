import React from "react";
import styled from "styled-components";
import { BlueDark, Pink, Pink2 } from "@shared/colors";
import { gutter } from "@shared/constants";
import InputElement from "./InputElement";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actions } from "@features/login/slicer";
import { isLogged } from "@features/login/selectors";
import { useRouter } from "next/navigation";

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

export const CardForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const submit = () => {
    dispatch(actions.validateUser());
  };
  const isAdminLogged = useAppSelector(isLogged);
  if (isAdminLogged) {
    router.replace("/dashboard");
    return <></>;
  } else
    return (
      <Card>
        <Avatar />
        <InputElement />
        <Buttons>
          <LoginBtn onClick={submit}>LOGIN</LoginBtn>
          <Recovery>recuperar contraseña</Recovery>
        </Buttons>
      </Card>
    );
};
