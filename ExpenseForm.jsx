import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // function con(e) {
  //   console.log(e.target.value);
  // }

  const [enterTitle, setEnterdTitle] = useState("");
  const [enterAmount, setEnterdAmount] = useState("");
  const [enterDate, setEnterdDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enterTitle: "",
  //   enterAmount: "",
  //   enterDate: "",
  // });

  function titleChanger(e) {
    setEnterdTitle(e.target.value);
    console.log(enterTitle);
    // *****************************************************
    // *****************************************************
    // setUserInput({
    //   ...userInput,
    //   enterTitle:e.target.value
    // })
    // ********************************************************
    // ********************************************************
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enterTitle: e.target.value,
    //   };
    // });
    // console.log(userInput.enterTitle);
  }
  function amountChanger(e) {
    setEnterdAmount(e.target.value);
    // console.log(enterTitle);
    // ********************************************************
    // ********************************************************
    // setUserInput({
    //   ...userInput,
    //   enterAmount: e.target.value,
    // });
    // ********************************************************
    // ********************************************************
    // setUserInput((prevState) => {
    //       return {
    //         ...prevState,
    //         enterDate: e.target.value,
    //       };
    //     });
  }
  function dateChanger(e) {
    setEnterdDate(e.target.value);

    // console.log(enterTitle);
    //***************************************************** */
    //***************************************************** */
    // setUserInput({
    //   ...userInput,
    //   enterDate: e.target.value,
    // });
    // ****************************************************************************************
    // ****************************************************************************************
    // setUserInput((prevState) => {//this will give us previous state
    //   return {
    //     ...prevState,
    //     enterDate: e.target.value,
    //   };
    // });
  }
  function btn(e) {
    e.preventDefault();
    let obj = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate)
    };
    props.onSaveExpenseData(obj)
    // console.log(obj);
    setEnterdTitle('')
    setEnterdAmount('')
    setEnterdDate('')
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div   className="new-expense">
          <label>Title</label>
          <input onChange={titleChanger} value={enterTitle} type="text" />
        </div>
        <div className="new-expense">
          <label>amount</label>
          <input onChange={amountChanger}  value={enterAmount} type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense">
          <label>Date</label>
          <input onChange={dateChanger}  value={enterDate} type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense">
        <button className="btn" onClick={btn} type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
