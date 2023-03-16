import React from 'react';
import ExpenseDate from './ExpenseDate';
const ExpensesItem = (props) =>{
    return (
        <li className='w-full mx-auto flex justify-between items-center p-2 my-4 bg-[#4b4b4b] rounded-[12px]'>
            <ExpenseDate date={props.date}/>
            <div className='md:flex-row flex flex-col gap-[1rem] items-end justify-start flex-1 '>
                <h2 className='flex-1 text-white text-base text-center  md:font-xl'>{props.title}</h2>
                <div className='price text-base font-bold text-white bg-[#40005d] border border-white-500 p-2 rounded-xl'>${props.amount}</div>
            </div>
        </li>
    )
}

export default ExpensesItem;