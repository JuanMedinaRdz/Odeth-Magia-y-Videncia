import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./storeProvider";
import { BlueDark } from "@shared/colors";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Magia Videncia",
  description: "Pagina del administrador de Magia Videncia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body style={{ backgroundColor: BlueDark }} className={inter.className}>
          {children}
        </body>
      </StoreProvider>
    </html>
  );
}
