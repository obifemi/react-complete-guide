import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './ExpenseItems.css';
function ExpenseItems(props) {
    return (
       <Card className='expenses'>
        {props.expenses.map((expense) =>(
  <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
))}
       </Card>
    );
}


export default ExpenseItems;