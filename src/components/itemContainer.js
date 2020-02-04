import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'


function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams

    return {
        item: itemState
    }
}

const mapDispatchProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? ()=> dispatch(buyCake()) : () => dispatch(buyIceCream)

    return {
        buyItem : dispatchFunction
    }
}

export default connect(mapStateToProps)(ItemContainer)