import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/index'


const CakeContainer = (props) => {
    const buyCake = () => {
        if(props.numOfCakes>0){
            props.buyCake()
        }
    }
    return (
        <div>
            <h2>Num of Cakes - {props.numOfCakes}</h2>
            <button onClick={buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
