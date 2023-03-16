import React,{useState} from 'react'
import ExpenseList from './ExpenseList';
import ExpensesChart from '../Expenses/ExpensesChart';
import ExpenseFilter from '../Expenses/ExpenseFilter';
const Expenses =(props)=> {
    const [selectedYear,setSelectedYear] = useState('2020');

    const getSelectedYear = (newSelected)=>{  
      setSelectedYear(newSelected);
    }

    const filteredYear = props.items.filter(expense=>{
      return expense.date.getFullYear().toString() === selectedYear;
    });

  return (
    <div className='p-3 bg-[rgb(31,31,31)] mx-auto my-[2rem] w-[50rem] max-w-[95%] rounded-[12px] shadow-[rgba(0,0,0,0.25)]'>
        <ExpenseFilter onGetSelectedYear={getSelectedYear} selected={selectedYear} />
        <ExpensesChart expenses={filteredYear}/>
        <ExpenseList currentYear={filteredYear}/>
    </div>
  )
}

export default Expenses;