import React from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from './ExpensesFilter';
function Expenses(props) {
    const expenseFilterHandler = (selectedYear) => {
        const year = {
            ...selectedYear
        };
    }
    return(
        <Card className="expenses">
            <ExpensesFilter onSelect={expenseFilterHandler}/>
            <ExpenseItem
            title={props.item[0].title}
            date={props.item[0].date}
            price={props.item[0].price}/>
             <ExpenseItem
            title={props.item[1].title}
            date={props.item[1].date}
            price={props.item[1].price}/>
             <ExpenseItem
            title={props.item[2].title}
            date={props.item[2].date}
            price={props.item[2].price}/>
             <ExpenseItem
            title={props.item[3].title}
            date={props.item[3].date}
            price={props.item[3].price}/>
             <ExpenseItem
            title={props.item[4].title}
            date={props.item[4].date}
            price={props.item[4].price}/>
        </Card>
    );
}

export default Expenses;