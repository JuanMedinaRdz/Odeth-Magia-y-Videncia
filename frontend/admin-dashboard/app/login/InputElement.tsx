"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import userSVG from "@public/user.svg";
import lockSVG from "@public/lock.svg";
import eyeSVG from "@public/eye.svg";
import hideSVG from "@public/hide.svg";
import { Pink2 } from "@shared/colors";
import { gutter } from "@shared/constants";

type Props = {
  username: string;
  password: string;
  setUser: (val: string) => void;
  setPw: (val: string) => void;
};

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 40%;
  justify-content: space-evenly;
`;

const Input = styled.input`
  font-size: 16px;
  width: -webkit-fill-available;
  height: 50px;
  border-radius: ${gutter("double")};
  border: unset;
  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  background-color: white;
  border-radius: ${gutter("double")};
  align-items: center;
  border: 2px solid ${Pink2};
`;

const InputFields = (props: Props) => {
  const [showP, setShowP] = useState(false);

  const { username, password, setPw, setUser } = props;
  return (
    <Inputs>
      <Wrapper>
        <Image
          src={userSVG}
          alt="user icon"
          style={{ padding: gutter("double") }}
        />
        <Input
          type="text"
          value={username}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Username"
        />
      </Wrapper>
      <Wrapper>
        <Image
          alt="lock logo"
          src={lockSVG}
          style={{ padding: gutter(), width: "26px" }}
        />
        <Input
          type={showP ? "text" : "password"}
          value={password}
          onChange={(e) => setPw(e.target.value)}
          placeholder="Password"
        />
        {showP ? (
          <Image
            src={eyeSVG}
            alt="password visible"
            onClick={() => setShowP(!showP)}
            style={{ width: "30px", height: "20px", paddingRight: gutter() }}
          />
        ) : (
          <Image
            src={hideSVG}
            alt="password hidden"
            onClick={() => setShowP(!showP)}
            style={{ width: "30px", height: "20px", paddingRight: gutter() }}
          />
        )}
      </Wrapper>
    </Inputs>
  );
};

export default InputFields;
