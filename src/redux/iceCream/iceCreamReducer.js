import { BUY_ICECREAM } from './iceCreamType'

var initialState = {
    numOfIceCreams: 10
}

const iceCreamreducer = (state = initialState, action) => {

    switch (action.type) {

        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }

        default: return state

    }

}

export default iceCreamreducer