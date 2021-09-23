import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  const startEditingForm = () => {
    setIsEditing(true);
  };

  const stopEditingForm = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (<button onClick={startEditingForm}>Add Expense</button>)}
      {isEditing && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingForm} />)}
    </div>
  );
};

export default NewExpense;