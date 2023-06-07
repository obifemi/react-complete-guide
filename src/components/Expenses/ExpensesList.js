
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
   

  return (
    <>
     { props.items.length === 0 && <p className='expenses-list__fallback'>No expenses found.</p> }

    <ul className='expenses-list'>
        


{props.items.map((expense) =>(
    <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />
  ))}
    </ul>
    </>
  );
};

export default ExpensesList;