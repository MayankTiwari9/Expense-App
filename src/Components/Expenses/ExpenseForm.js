import React, { useState } from "react";

const ExpenseForm = () => {
  const [name, SetName] = useState("");
  const [amount, SetAmount] = useState("");
  const [date, SetDate] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log('Item Name:-', name, 'Item Amount:-', amount, 'Item Date:-',date);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" name="item" onChange={(e) => SetName(e.target.value)} placeholder="Item Name" />
        <input type="number" name="amount" onChange={(e) => SetAmount(e.target.value)} placeholder="Item Amount" />
        <input type="date" name="date" onChange={(e) => SetDate(e.target.value)} placeholder="Item Date" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
