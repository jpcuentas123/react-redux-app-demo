import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from "./userTypes";

let initialState = {
    loading: true,
    users: [],
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case FETCH_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            break;
    }
}

export default userReducer