import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/index'


const CakeContainer = (props) => {
    const [number, setNumber] = useState(1)
    const buyCake = (number) => {
        if (props.numOfCakes > 0 && props.numOfCakes >= number) {
            props.buyCake(number)
        }
    }
    return (
        <div>
            <h2>Num of Cakes - {props.numOfCakes}</h2>
            <input type="number" value={number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick={()=>buyCake(number)}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(null, mapDispatchToProps)(CakeContainer)
