import React, {useState} from 'react';
import './Expenses.css';

const ExpenseForm =(props)=> {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const TitleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const AmountChangeHandler = (event) => {
        setAmount(event.target.value);
    }
    const DateChangeHandler = (event) => {
        setDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expense= {
            title:title,
            amount: +amount,
            date: new Date(date)
        }
        props.onSaveExpense(expense);
        setTitle('');
        setAmount('');
        setDate('');
    }
  return(
    <form onSubmit={submitHandler}>
        <div className='flex flex-wrap gap-[1rem] mb-[1rem] text-left'>
            <div>
                <label className='font-bold mb-[0.5rem] block'>Title</label>
                <input 
                value={title}
                type="text" 
                className='p-[0.5rem] rounded-[6px] border border-#cccc-500 w-[20rem] max-w-[100%]'
                onChange={TitleChangeHandler}
                /> 
            </div>
            <div>
                <label className='font-bold mb-[0.5rem] block'>Amount</label>
                <input 
                value={amount}
                type="Number" 
                className='p-[0.5rem] rounded-[6px] border border-#cccc-500 w-[20rem] max-w-[100%]'
                onChange={AmountChangeHandler}
                /> 
            </div>
            <div>
                <label className='font-bold mb-[0.5rem] block'>Date</label>
                <input 
                value={date}
                type="date" 
                min='2019-01-01' 
                max='2023-12-31' 
                className='p-[0.5rem] rounded-[6px] border border-#cccc-500 w-[20rem] max-w-[100%]'
                onChange={DateChangeHandler}
                /> 
            </div>
        </div>
        <div className='text-right new-expense'>
        <button className='cursor-pointer py-[1rem] px-[2rem] border-2 border-[#40005d] bg-[#40005d] text-white rounded-[12px] mr-[1rem]'
            onClick={props.onCancel}
        >Cancel</button>
         <button type='submit' className='cursor-pointer py-[1rem] px-[2rem] border-2 border-[#40005d] bg-[#40005d] text-white rounded-[12px] mr-[1rem]
         '> Add Expense</button> 
        </div>
        
    </form>
  )
}

export default ExpenseForm;