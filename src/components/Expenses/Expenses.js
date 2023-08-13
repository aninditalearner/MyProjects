import React, { useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from './ExpensesFilter';
function Expenses(props) {
    const [selectedYearFromDrodown,setSelectedYear] = useState('2021');
    let excludedYears = '2019, 2020 & 2021';
    const expenseFilterHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
        if(selectedYearFromDrodown==='2019'){
            excludedYears = '2020, 2021 & 2022';
        }
        else if(selectedYearFromDrodown==='2020'){
            excludedYears = '2019, 2021 & 2022';
        }
        else if(selectedYearFromDrodown==='2021'){
            excludedYears = '2019, 2020 & 2022';
        }
    }
    return(
        <Card className="expenses">
            <ExpensesFilter selected={selectedYearFromDrodown} onSelect={expenseFilterHandler}/>
            <p>Data for the year {excludedYears} is hidden</p>
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