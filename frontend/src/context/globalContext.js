import { React, createContext, useContext, useState } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:5200/api/";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  // Add Income
  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-income`, income)
      .catch((error) => {
        setError(error.response?.data.message);
        console.log(error);
      });
    getIncomes();
  };

  // Get Incomes
  const getIncomes = async () => {
    const response = await axios
      .get(`${BASE_URL}get-incomes`)
      .catch((error) => {
        setError(error.response?.data.message);
        console.log(error);
      });
    setIncomes(response?.data);
  };
  // Delete Income
  const deleteIncome = async (id) => {
    const response = await axios
      .delete(`${BASE_URL}/delete-income/${id}`)
      .catch((error) => {
        setError(error.response?.data.message);
      });
    getIncomes();
  };
  // Total Income
  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome += income.amount;
    });
    return totalIncome;
  };
  //Add Expense
  const addExpenses = async (expense) => {
    const response = await axios
      .post(`${BASE_URL}add-expense`, expense)
      .catch((error) => {
        setError(error.response?.data.message);
        console.log(error);
      });
    getExpenses();
  };

  // Get Expenses
  const getExpenses = async () => {
    const response = await axios
      .get(`${BASE_URL}get-expenses`)
      .catch((error) => {
        setError(error.response?.data.message);
        console.log(error);
      });
    setExpenses(response?.data);
  };
  // Delete expense
  const deleteExpenses = async (id) => {
    const response = await axios
      .delete(`${BASE_URL}/delete-expense/${id}`)
      .catch((error) => {
        setError(error.response?.data.message);
      });
    getExpenses();
  };
  // Total Expenses
  const totalExpenses = () => {
    let totalExpense = 0;
    expenses.forEach((expense) => {
      totalExpense += expense.amount;
    });
    return totalExpense;
  };
  // Total balance
  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };
  // Transaction History
  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    return history
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 3);
  };
  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        deleteIncome,
        totalIncome,
        incomes,
        addExpenses,
        getExpenses,
        deleteExpenses,
        totalExpenses,
        expenses,
        totalBalance,
        transactionHistory,
        error,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
