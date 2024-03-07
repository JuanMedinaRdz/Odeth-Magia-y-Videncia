"use client";
import { isLogged } from "@features/login/selectors";
import { BlueDark } from "@shared/colors";
import NavBar from "@shared/components/navbar";
import { useAppSelector } from "@store/hooks";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  background-color: ${BlueDark};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;

export default function DashboardLayout({ children }: Props) {
  const isAdminLogged = useAppSelector(isLogged);
  console.log("isAdminLogged --> ", isAdminLogged);

  return (
    <Wrapper>
      <section>{children}</section>
      <NavBar />
    </Wrapper>
  );
}
