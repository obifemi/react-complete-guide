import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";
 
function Expenses(props) {
  const [filteredYear, setFilteredYear]  = useState('2020');

  
  const filterChangeHandler = selectedYear => {
    console.log('Expenses.js');
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  const filtereditems=props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);
    return (
    <div>
              <Card className='expenses'>
                    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                    <ExpensesChart expenses={filtereditems} />
                    <ExpensesList items={filtereditems} />

              </Card>

      </div>
    );
}


export default Expenses;