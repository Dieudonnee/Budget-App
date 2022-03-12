import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import ExpenseTransaction from './expenseTransaction'


const Expense=()=> {
  const {expenseTransactions} = useContext(GlobalContext);
  console.log('expenseTransaction', expenseTransactions);

  return (
    
    <div  className="transactions transactions-expense">
        <h2>Transaction History</h2>
        <ul className="transactions-list">
        {expenseTransactions.map(expenseTransaction =>(
            <ExpenseTransaction key={expenseTransaction.id} expenseTransaction={expenseTransaction} />
        ))}
        
            
        </ul>
    </div>
  )
}

export default Expense
