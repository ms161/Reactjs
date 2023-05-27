// import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
const click=(e)=>{
  e.target.parentElement.remove()
}

  return (
    <Card className="expense-item2">
      <ExpenseDate date={props.date} />

      <ExpenseDetails
        name={props.name}
        amount={props.amount}
        location={props.location}
      />

      <button
      onClick={click}
      >
       Delete Expense
      </button>
    </Card>
  );
};

export default ExpenseItem;
