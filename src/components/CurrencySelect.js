import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';



const CurrencySelect = (props)=>{
    const {dispatch} = useContext(AppContext);

    const handleSubmit = (e)=>{
        const currency = e.target.value
        
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        })
        
    }


    return(
        <div>
            <select id='currency-select' className='form-select ' onChange={handleSubmit}>
                <option value='£'>£ Pound</option>
                <option value='$'>$ Dollar</option>
                <option value='Є'>Є Euro</option>
                <option value='₹'>₹ Rupee</option>
            </select>
        </div>
    )
}

export default CurrencySelect