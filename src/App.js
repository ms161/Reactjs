import ExpenseItem from "./Components/Expenses/ExpenseItem";

const App = () => {
  let expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 21,
      date: new Date(),
      LocationOfExpenditure: "USA",
    },
    {
      id: "e2",
      title: "New Tv",
      amount: 2301,
      date: new Date(),
      LocationOfExpenditure: "India",
    },
    {
      id: "e3",
      title: "car Insurance",
      amount: 2121,
      date: new Date(),
      LocationOfExpenditure: "Canada",
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 548,
      date: new Date(),
      LocationOfExpenditure: "London",
    },
  ];

  return (
    <div className="App">
      
      {expenses.map((element, index) => (
        <ExpenseItem
          key={index}
          name={element.title}
          amount={element.amount}
          date={element.date}
          location={element.LocationOfExpenditure}
        />
      ))}
     
    </div>
  );
};

export default App;
