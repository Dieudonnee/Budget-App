import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import IncomeTransaction from './incomeTransaction' 

function IncomeList() {
    const {incomeTransactions} = useContext(GlobalContext);
    console.log('incomeTransactions', incomeTransactions);
  return (
     
    <div  className="transactions transactions-income">
    
        <h2>Transaction History</h2>
        <ul className="transactions-list">
        {incomeTransactions.map(incomeTransaction =>(
            <IncomeTransaction key={incomeTransaction.id} incomeTransaction={incomeTransaction} />
        ))}
        
            
        </ul>
    </div>
  )
}

export default IncomeList