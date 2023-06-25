import { createStore } from "@reduxjs/toolkit"

const reducer = (state = 'username') => {
    return state
}

const store = createStore(reducer, 'username')

export default store