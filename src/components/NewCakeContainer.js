import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux';


export default function NewCakeContainer() {
    const [number, setNumber] = useState(1)
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch();

    const buyCakeDispatch = (number) => {
        if (numOfCakes > 0 && numOfCakes>= number) {
            dispatch(buyCake(number))
        }
    }
    return (
        <div>
            <h2>Num of Cakes - {numOfCakes}</h2>
            <input type="number" value={number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick={() => buyCakeDispatch(number)}>Buy {number} Cake</button>
        </div>
    )
}
