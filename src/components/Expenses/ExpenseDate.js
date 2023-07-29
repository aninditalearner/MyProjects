import React from 'react';
import "./ExpenseDate.css";
const ExpenseDate = (props) => {

    const dateDay=props.date.toLocaleString('en-US', {day: '2-digit'});
    const dateMonth=props.date.toLocaleString('en-US', {month: 'long'});
    const dateYear=props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{dateMonth}</div>
            <div className="expense-date__day">{dateDay}</div>
            <div className="expense-date__year">{dateYear}</div>
        </div>
    );

}

export default ExpenseDate;