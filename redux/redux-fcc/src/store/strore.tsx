import { createStore } from "@reduxjs/toolkit"

const reducer = (state = {logged: false}) => {
    return state
}
const defaultState = {
    logged: false,
}

const store = createStore(reducer, defaultState)

export default store