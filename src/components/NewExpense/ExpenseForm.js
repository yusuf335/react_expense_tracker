import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

/*****************************************************************************/
// If we want to manage multiple state at once then we can use this approach
// const [userInput, setUserInput] = useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: ''
// })

// const titleChangeHandler = (event) => {
//     setUserInput((prevState) => {
//         return {...prevState, enteredTitle: event.target.value}
//     })
//  };

/*****************************************************************************/
// We can use multiple handler also but the onChange function need to call a function we work
//   const inputChangeHandler = (indentifier, value) => {
//     if (indentifier === "title") {
//       setEnteredTitle(value);
//     } else if (indentifier === "date") {
//       setEnteredDate(value);
//     } else {
//       setEnteredAmount(value);
//     }
//   };

//   onChange((event) => {
//     inputChangeHandler("title", event.target.value);
//   });
