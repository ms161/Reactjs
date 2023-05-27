import "./ExpenseItem.css";

const ExpenseDetails=(props)=> {
  return (
    <div className="expense-item">
        
      <div className="expense-item__description">
   
      <h2 className="name">{props.name}</h2> 
        <div className="expense-item__price">{props.amount}</div>
        <h4 className="location">{props.location}</h4>
        </div>
    </div>
  );
}
export default ExpenseDetails;
