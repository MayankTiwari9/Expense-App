import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {

    
  let content;

  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>;
  } else if (props.items.length === 1) {
    content = (
      <>
        {props.items.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            LocationOfExpenditure={item.LocationOfExpenditure}
          />
        ))}
        <h2 className='expenses-list__fallback'>Only a single expense here. Please add more...</h2>
      </>
    );
  } else {
    content = props.items.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
        LocationOfExpenditure={item.LocationOfExpenditure}
      />
    ));
  }


  return (
    <ul className='expenses-list'>
    {content}
    </ul>
  )
}

export default ExpensesList;