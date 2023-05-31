import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
  let expensesContent = <p>No expense found</p>;

  if(props.items.length==0){
    return <h2 className="expenses-list__fallback">Found no Expenses.</h2>
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <div>
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        </div>
      ))}
    </ul>
  );
};
export default ExpenseList;
