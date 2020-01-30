import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {buyIceCream} from '../redux'

export default function HooksiceCream() {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();
    const buyIceCreamDispatch = () => {
        if (numOfIceCreams > 0) { 
            dispatch(buyIceCream())
        }
    }
    return (
        <div>
            <h2>Number of IceCream - {numOfIceCreams}</h2>
            <button onClick={buyIceCreamDispatch}>Buy IceCream</button>
        </div>
    )
}
