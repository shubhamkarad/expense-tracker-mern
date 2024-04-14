import React, { useEffect } from "react";
import { styled } from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";
import { Form } from "../Expenses/ExpenseForm";
import { ExpenseItem } from "./ExpenseItem";

export const Expenses = () => {
  const { deleteExpenses, addExpense, expenses, getExpenses, totalExpenses } =
    useGlobalContext();
  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <ExpensesStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className="total-income">
          Total Expenses: <span>${totalExpenses()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="expense">
            {expenses.map((expense) => {
              const { _id, title, amount, date, category, description, type } =
                expense;
              return (
                <ExpenseItem
                  key={_id}
                  title={title}
                  amount={amount}
                  date={date}
                  category={category}
                  description={description}
                  id={_id}
                  indicatorColor={"var(--color-green)"}
                  deleteExpense={deleteExpenses}
                  type={type}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpensesStyled>
  );
};

const ExpensesStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      color: var(--color-green);
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .expense {
      flex: 1;
    }
  }
`;
