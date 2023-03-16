import React from 'react'

const ExpenseDate =(props)=> {
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US',{day: '2-digit'});
    const year = props.date.getFullYear();
  return (
    <div className='flex flex-col w-[5.5rem] h-[5.5rem] border border-#ececec bg-[#2a2a2a] text-white justify-center items-center rounded-xl'>
        <div className='text-xs font-bold'>{month}</div>
        <div className='font-bold text-2xl'>{day}</div>
        <div className='text-xs'>{year}</div>
    </div>
  )
}

export default ExpenseDate;