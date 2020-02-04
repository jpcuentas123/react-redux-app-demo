import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './userTypes'
import Axios from 'axios'

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST,
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserError = (error) => {
    return {
        type: FETCH_USER_ERROR,
        payload: error
    }
}

export const fetUser = () => {
    return dispatch => {
        dispatch(fetchUserSuccess())
        Axios.get('https://jsonplaceholder.typicode.com/users').
            then(response => {
                const users = response.data
                dispatch(fetchUserSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUserError(errorMsg))
            })
    }
}