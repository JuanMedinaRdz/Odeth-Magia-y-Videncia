"use client";
import { isLogged } from "@features/login/selectors";
import { BlueDark } from "@shared/colors";
import NavBar from "@shared/components/navbar";
import { useAppSelector } from "@store/hooks";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const isAdminLogged = useAppSelector(isLogged);
  console.log("isAdminLogged --> ", isAdminLogged);

  return (
    <section style={{ backgroundColor: BlueDark, height: "100%" }}>
      {children}
      <NavBar />
    </section>
  );
}
