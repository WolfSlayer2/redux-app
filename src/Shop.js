import React from 'react'
import { useDispatch } from 'react-redux'
import {actionCreators} from './state/index'
import { bindActionCreators } from 'redux';

function Shop() {
    const dispatch = useDispatch();
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);

    return (
        <div className='my-4'>
            <h2>Deposit/Withdraw Money</h2>
            {/* <button className="btn btn-primary mx-2" onClick={()=> dispatch(actionCreators.withdrawMoney(100))}>-</button> */}
            <button className="btn btn-primary mx-2" onClick={()=> withdrawMoney(100)}>-</button>
            Update Balance
            <button className="btn btn-primary mx-2" onClick={()=> depositMoney(250)}>+</button>
        </div>
    )
}

export default Shop