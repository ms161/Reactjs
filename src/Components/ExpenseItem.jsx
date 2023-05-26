import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div>
        <ExpenseDetails
          amount={props.amount}
          location={props.location}
          name={props.name}
        />
      </div>
    </div>
  );
}

export default ExpenseItem;
