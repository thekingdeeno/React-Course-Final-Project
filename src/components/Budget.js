import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const {dispatch} = useContext(AppContext)

    const handleBudgetChange = (event) => {
        const amountSpent = expenses.reduce((total, item)=>{
            return(total + item.cost)
        },0);

        const amount = event.target.value;

        if (amount < amountSpent){
            alert('You cannot reduce the budget value lower than the spending')
        }else{
            setNewBudget(amount);
            dispatch({
                type: 'SET_BUDGET',
                payload: amount
            }) 
        }

        // if(amount > 20000){
        //     alert('')
        // }
    }
    
    return (
        <div className='alert alert-primary'>
        <span>Budget: {currency}</span>
        <input id='budget-input' type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;