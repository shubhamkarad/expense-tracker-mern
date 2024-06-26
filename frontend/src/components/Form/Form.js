import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import { styled } from "styled-components";
import { Button } from "../Button/Button";
import { plus } from "../../utils/Icons";

export const Form = () => {
  const { addIncome, getIncomes, error } = useGlobalContext();
  const [inputState, setInputState] = React.useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });
  const { title, amount, date, category, description } = inputState;
  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
    getIncomes();
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <div className="input-control">
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Title"
          onChange={handleInput("title")}
        />
      </div>
      <div className="input-control">
        <input
          type="text"
          value={amount}
          name="amount"
          placeholder="Amount"
          onChange={handleInput("amount")}
        />
      </div>
      <div className="input-control">
        <DatePicker
          className="date-picker"
          id="date"
          placeholderText="Enter a date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => setInputState({ ...inputState, date })}
        />
      </div>
      <div className="selects input-control">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investments</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank Transfer</option>
          <option value="youtube">Youtube</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="input-control">
        <textarea
          value={description}
          name="description"
          placeholder="Add a reference"
          cols="30"
          rows="4"
          onChange={handleInput("description")}
        />
      </div>
      <div className="submit-btn">
        <Button
          name={"Add Income"}
          icon={plus}
          bg={"var(--color-accent)"}
          color={"#fff"}
          bpad="0.8rem 1.6rem"
          bRad={"30px"}
        />
      </div>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input, textarea, select{
    display: block !important;
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color:rgba(34, 34, 96, 0.4);
    }
  }
  .input-control {
    input {
      width: 100%
    }
  }
    .selects {
      display: flex;
      justify-content: flex-end;
      select {
        color: rgba(34, 34, 96, 0.4);
        &:focus, &:active {
          color: rgba(34, 34, 96, 1);
        }
      }
    }

  .submit-btn {
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      background: transparent;
      border: none
      outline: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      &:hover {
        background: var(--color-green) !important;
        cursor: pointer;
      }
    }
  }
  .react-datepicker-wrapper {
    display: block !important;
  }
`;
