// import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
const ExpenseItem=(props)=> {
  return (
    <Card className="expense-item">
   
     
   
   <ExpenseDate date={props.date} />
  
  <ExpenseDetails
          name={props.name}
          amount={props.amount}
          location={props.location}
        
        />
 
        
   
    </Card>
  );
}

export default ExpenseItem;
