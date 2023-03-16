import React from 'react'

const ExpenseFilter =(props)=> {
    const expenseFilterHandler =(event)=>{
        props.onGetSelectedYear(event.target.value)
    }
  return (
    <div className='py-[0] px-4' >
        <div className='flex w-[full] items-center justify-between my-4 mx-0'>
        <label className='font-bold mb-2 text-white'>Filter by Year</label>
        <select onChange={expenseFilterHandler} 
        className='py-[0.3rem] px-[3rem] font-bold rounded-[6px]' 
        value={props.selected}>
            <option value='2023'>2023</option>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
        </select>
        </div>
    </div>
  )
}

export default ExpenseFilter;