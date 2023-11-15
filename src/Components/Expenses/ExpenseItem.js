import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";


const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);
  const [expense, setExpense] = useState(props.amount);
  console.log('ExpenseItem evaluated by react');

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  const epenseHandler = () => {
    setExpense(100);
  }

  const deleteHandler = () => {
    console.log("Item Deleted");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={expense}
        LocationOfExpenditure={props.LocationOfExpenditure}
        title={title}
      />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={epenseHandler}>Change Expense</button>
      <button onClick={deleteHandler}>Delete Expense</button>
    </Card>
  );
};

export default ExpenseItem;
