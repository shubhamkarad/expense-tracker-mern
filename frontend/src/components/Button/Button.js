import React from "react";
import { styled } from "styled-components";

export const Button = ({ name, icon, onClick, bg, bpad, color, bRad }) => {
  return (
    <ButtonStyled
      style={{
        background: bg,
        padding: bpad,
        borderRadius: bRad,
        color: color,
      }}
      onClick={onClick}
    >
      {icon}
      {name}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;
