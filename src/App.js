import { useState } from "react";
import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";

const App = () => {

  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure: "New Delhi",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      LocationOfExpenditure: "London",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure: "Chennai",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure: "Bangalore",
    },
  ])

  const addExpenseHandler = (expense) => {

    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    })
    // console.log('In App.js');
    // console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>
    </div>
  );
}

export default App;
