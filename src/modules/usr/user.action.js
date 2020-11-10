import { createAction, handleAction } from 'redux-actions'
import { userService } from './user.service'

export const userConstants = {
    REGISTER_REQUEST: 'USER_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'USER_REGISTER_FAILURE',
    LOGIN_REQUEST: 'USER_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USER_LOGIN_FAILURE'
}

let sessionUser = JSON.parse(sessionStorage.getItem('strUser'))
export const loginSuccess = createAction(userConstants.LOGIN_SUCCESS)

const initialState = {
    user: {},
    loggedIn: false
}

// Reducer

const userReducer = handleAction (
    { [userConstants.LOGIN_SUCCESS] : (state, action) => ({ loggedIn: true, user: action.user})},
    initialState

)

// Actions

export const userActions = {
    register, login
}

// Container가 Modules로 보낼 때 dispatch가 사용 됨
function register(user){
    return dispatch => {
        dispatch(request(user))
        userService.register(user)
            .then(
                user => {},
                error => {}
            )
    }
    
    function request(user) { return { type: userConstants.REGISTER_REQUEST, user} }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user} }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error} }
}

function login(user){
    return dispatch => {
        dispatch(request(user))
        userService.login(user)
            .then(
                user => {
                    console.log(user.name)
                    dispatch(success(user))
                    history.pushState('/recomovie')
                },
                error => {
                    dispatch(failure(error))
                }
            )
    }

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user} }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user} } // 파이썬에서 받은 유저
    function failure(user) { return { type: userConstants.LOGIN_FAILURE, user} } // 파이썬에서 
}