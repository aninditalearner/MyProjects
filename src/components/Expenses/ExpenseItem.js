import React, { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {

    //let title = props.title;

    //useState returns an array of two elements -> 1st one is the variable value itself and 2nd is teh func to update the value
    const [title, setTitle] = useState(props.title);

    const clickHandler =() => {
        setTitle("Updated!");
        console.log(title);
        //title="Updated!";
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date = {props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;