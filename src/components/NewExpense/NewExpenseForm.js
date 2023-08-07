import React, { useState} from 'react';

import './NewExpenseForm.css';

const NewExpenseForm=(props)=>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    /*const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredPrice: '',
        enteredDate: ''
    });*/

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        /*setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value} 
         });*/
    }

    
    const priceChangeHandler = (event) =>{
        setEnteredPrice(event.target.value);
        /*setUserInput({
            ...userInput,
            enteredPrice: event.target.value,
        });*/

        // we should use arrow function instead of this approach because React schedules State updates and sometime we might get outdated states
        /*setUserInput((prevState) => {
           return {...prevState, enteredPrice: event.target.value} 
        });*/
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
        /*setUserInput((prevState) => {
            return {...prevState, enteredDate: event.target.value} 
         });*/
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)
        };
       
        props.onSubmittingForm(expenseData);
        //Two way bindings
        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('');
    }
    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={ titleChangeHandler }/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={enteredPrice} onChange={ priceChangeHandler }/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min='2021-01-01' max='2023-12-31' value={enteredDate} onChange={ dateChangeHandler }/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit' >Add Expense</button>
        </div>
    </form>
    );
}

export default NewExpenseForm;