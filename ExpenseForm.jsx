import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  function con(e) {
    console.log(e.target.value);
  }

  return (
    <form>
      <div onChange={con} className="new-expense__controls">
        <div className="new-expense">
          <label>Title</label>
          <input type="text" />
        </div>
        <div onChange={con} className="new-expense">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div onChange={con} className="new-expense">
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
