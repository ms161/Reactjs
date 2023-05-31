import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
const [edit,setEdit]=useState(false)

const isEditing=()=>{
  setEdit(true)
}
const noEditing=()=>{
  setEdit(false)
}

  return (
    <div className='new-expense'>
      { !edit && <button onClick={isEditing} >Add Expense</button>}
    {edit && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={noEditing}  />}
    </div>
  );
};

export default NewExpense;
