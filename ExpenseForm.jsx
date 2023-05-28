import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  // function con(e) {
  //   console.log(e.target.value);
  // }

  const [enterTitle,setEnterdTitle]=useState('')
  const [enterAmount,setEnterdAmount]=useState('')
  const [enterDate,setEnterdDate]=useState('')
  function titleChanger(e){
    setEnterdTitle(e.target.value)
    console.log(enterTitle)
  }
  function amountChanger(e){
    setEnterdAmount(e.target.value)
    console.log(enterTitle)
  }
  function dateChanger(e){
    setEnterdDate(e.target.value)
    console.log(enterTitle)
  }


  return (
    <form>
      <div onChange={titleChanger} className="new-expense__controls">
        <div className="new-expense">
          <label>Title</label>
          <input type="text" />
        </div>
        <div onChange={amountChanger} className="new-expense">
          <label>amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div onChange={dateChanger} className="new-expense">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
