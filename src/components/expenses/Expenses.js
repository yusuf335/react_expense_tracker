import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const getFilterdata = (data) => {
    setFilteredYear(data);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChnageFilter={getFilterdata} />
      <ExpensesChart expenses={filteredExpense} />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
};

export default Expenses;
