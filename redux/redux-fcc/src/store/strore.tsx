import { createStore } from "@reduxjs/toolkit"

export const enum ACTIONS_TYPE {
    LOGIN,
    LOGOUT,
}
const defaultState = {
    logged: false,
}
const reducer = (state = defaultState, action: {type: ACTIONS_TYPE}) => {
    switch (action.type)  {
        case ACTIONS_TYPE.LOGIN:
            console.log('action login');
            return {...state, logged: true}
        case ACTIONS_TYPE.LOGOUT:
            return {...state, logged: false}
        default:
            console.log('Default');
            
            return state
    }

}


const store = createStore(reducer, defaultState)

export default store