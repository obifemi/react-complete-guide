import ExpenseItem from "./ExpenseItem";
import './ExpenseItems.css';
function ExpenseItems(props) {
    return (
       <div className='expenses'>
        {props.expenses.map((expense) =>(
  <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
))}
       </div>
    );
}


export default ExpenseItems;