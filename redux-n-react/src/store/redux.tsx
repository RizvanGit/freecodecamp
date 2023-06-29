import Redux from 'redux'

interface IState {
    counter: number,
}
interface IActions {
    type: string,
}
const storeReducer = (state: IState = {counter: 0}, action:IActions): IState => {
    return state
}
const store = Redux.createStore(storeReducer)

export default store