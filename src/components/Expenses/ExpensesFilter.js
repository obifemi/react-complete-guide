import React from 'react';
import './ExpensesFilter.css';
import { useState } from 'react';


const ExpensesFilter = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const dropdownChangeHandler = (event) => {
        // setFilteredYear(event.target.value);
        props.onChangeFilter(event.target.value);
        console.log(`props from filter: ${props.selected}`);
    };
    
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler} value={props.selected}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;