import React from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

function App() {
const expenses = [
  {title: 'Car Insurance', price: 245.09, date: new Date (2023, 6, 28)},
  {title: 'House Rent', price: 785.19, date: new Date (2023, 6, 1)},
  {title: 'Gardening', price: 102.34, date: new Date (2022, 5, 25)},
  {title: 'Clothes shopping', price: 567.45, date: new Date (2021, 10, 12)},
  {title: 'Snacks & beverages', price: 1023.56, date: new Date (2022, 8, 20)}
]
const addNewExpenseHandler = (newExpense) => {
  const expenseData = {
    ...newExpense,
  };
  console.log("In App.js");
  console.log(expenseData);

}

  return (
    <div>
      <NewExpense onNewExpense={addNewExpenseHandler}/>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
