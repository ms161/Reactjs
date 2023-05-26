import './ExpenseItem.css'
function ExpenseItem(props){
    const expenseDate=new Date()
    const expenseTitle='car Insurance'
    const expenseAmount=300
    const LocationOfExpenditure='India'
    // console.log(props.name)
    return (
    <div className="expense-item">
        <div>{props.date}</div>
        <div className="expense-item__description">
            <h2>{props.name}</h2>
            <div className="expense-item__price">{props.amount}
           
            </div>
            <h4 className='location' >{props.location}</h4>
        </div>
        
    </div>
    
    )
}

export default ExpenseItem;