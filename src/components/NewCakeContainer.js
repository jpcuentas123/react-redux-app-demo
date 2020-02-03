import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux';


export default function NewCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch();

    const buyCakeDispatch = () => {
        if (numOfCakes > 0) { 
            dispatch(buyCake())
        }
    }
    return (
        <div>
            <h2>Num of Cakes - {numOfCakes}</h2>
            <button onClick={() => buyCakeDispatch()}>Buy Cake</button>
        </div>
    )
}
