import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("CLicked!");
  };

  const deleteHandler = () => {
    console.log("Item Deleted");
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        LocationOfExpenditure={props.LocationOfExpenditure}
        title={props.title}
      />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete Expense</button>
    </div>
  );
};

export default ExpenseItem;
