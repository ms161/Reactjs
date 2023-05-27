import './Card.css'
const Card=(props)=>{
    const classes='expense-item'+props.className;//making our element to take classes like div
    return <div className={classes}>{props.children}</div>
    //props.children children is reserved keyword in js

}

export default Card;