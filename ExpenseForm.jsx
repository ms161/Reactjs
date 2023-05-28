import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
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
   function btn(e){
    e.preventDefault()
   let obj={
    title:enterTitle,
    amount:enterAmount,
    date:enterDate
   }
   console.log(obj)
   }
  return (
    <form>
      <div className="new-expense__controls">
        <div  onChange={titleChanger} className="new-expense">
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
        <button onClick={btn} type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
