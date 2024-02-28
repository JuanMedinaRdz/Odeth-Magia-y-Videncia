import { AppError } from "@pipeline/AppError";
import { CustomError } from "@pipeline/types";
import React from "react";

type Props = {
  error: CustomError | AppError;
};

export default function ShowError({ error }: Props) {
  const { messages } = error;
  if (typeof messages === "string") {
    return <span style={{ color: "red" }}> {messages}</span>;
  }

  return (
    <>
      {messages.map((e, i) => (
        <span key={i} style={{ color: "red" }}>
          {e}
        </span>
      ))}
    </>
  );
}
