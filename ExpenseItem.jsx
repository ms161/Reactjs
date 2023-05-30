// import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";


// useState() //we cant call this here
const ExpenseItem = (props) => {
  // useState(); //we can only call this inside our component
  //use state return an array, first value we get is value itself and second value we get as a function
  const [title, setTitle] = useState(props.name);
  const [amount, setAmount] = useState(props.amount);
  //the title is the value , and setTitle is updated function from which we can change the value of title

  const click = (e) => {
    setTitle("Updated!");
    setAmount(100);
    //when we call setTitle() the jsx file will get executed again and thats how we get our new data rendered to screen again
    // e.target.parentElement.remove();
    console.log(title);
  };
const [filterdYear, setFilterdYear]=useState('2023')

  const filterChangeHandler=selectedyear=>{
    setFilterdYear(selectedyear)
  }

  return (
    <Card className="expense-item2">
      <ExpensesFilter selected={filterdYear} onChangeFilter={filterChangeHandler} />

      <ExpenseDate date={props.date} />

      <ExpenseDetails name={title} amount={amount} location={props.location} />

      <button onClick={click}>Delete Expense</button>
    </Card>
  );
};

export default ExpenseItem;
