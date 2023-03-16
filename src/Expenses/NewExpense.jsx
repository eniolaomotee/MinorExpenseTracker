import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props)=>{
    const [isEditing, setIsEditing] = useState(false);
    const newExpenseCollected = (enteredExpense)=>{
        const expense ={
            ...enteredExpense,
            id: Math.random().toString()
        }
        props.onEnteredExpense(expense);
        console.log(expense);
        setIsEditing(false);
    }
    const startIsEditing = ()=>{
        setIsEditing(true);
    }
    const stopIsEditing =()=>{
        setIsEditing(false);
    }

    return(
        <div className="bg-[#a892ee] p-[1rem] my-[2rem] mx-auto w-[60%] rounded-[12px] text-center ">
            {!isEditing ? <button className="cursor-pointer py-[1rem] px-[2rem] border-2 border-[#40005d] bg-[#40005d] text-white rounded-[12px] mr-[1rem]" onClick={startIsEditing}>Add Expense</button> : <ExpenseForm onSaveExpense={newExpenseCollected} onCancel={stopIsEditing} /> }
        </div>
    )
}

export default NewExpense;