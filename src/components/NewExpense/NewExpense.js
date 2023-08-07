import React from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {
    const newExpenseFormSubmitHandler = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
            
        };
        props.onNewExpense(expenseData);

    }
    return (
        <div className="new-expense">
            <NewExpenseForm onSubmittingForm={newExpenseFormSubmitHandler}/>
        </div>
    );
}

export default NewExpense;