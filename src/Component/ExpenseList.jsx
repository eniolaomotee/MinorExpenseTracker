import React from 'react'
import ExpensesItem from './ExpensesItem';
function ExpenseList(props) {

    if(props.currentYear.length === 0){
        return <h2 className='text-white text-center'>Found No Expense</h2>
    }

  return (
    <ul className='list-none'>
       {props.currentYear.map(expense=>
          <ExpensesItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          />
          )}
    </ul>
  )
}

export default ExpenseList;