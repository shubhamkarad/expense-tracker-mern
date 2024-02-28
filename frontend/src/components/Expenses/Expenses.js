import React from "react";
import { styled } from "styled-components";
import { InnerLayout } from "../../styles/Layouts";

export const Expenses = () => {
  return (
    <ExpensesStyled>
      <InnerLayout>Expenses</InnerLayout>
    </ExpensesStyled>
  );
};

const ExpensesStyled = styled.div``;
