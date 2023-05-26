import "./ExpenseItem.css";
function ExpenseDetails(props) {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
      <div>  <h2>{props.name}</h2>  </div>
        <div className="expense-item__price">{props.amount}</div>
        <h4 className="location">{props.location}</h4>
        </div>
    </div>
  );
}
export default ExpenseDetails;
