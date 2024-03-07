
import React, { useContext } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { currency ,dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        }

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        })
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button className='increase-btn' onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button className='decrease-btn' onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><RiDeleteBin5Line className='delete-btn' size='1.5em' onClick={handleDeleteExpense}></RiDeleteBin5Line></td>
        </tr>
    );
};

export default ExpenseItem;