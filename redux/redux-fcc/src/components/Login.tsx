import {FC, FormEvent} from 'react'
import Card from './Card/Card'
import store, { ACTIONS_TYPE } from '../store/strore'
import Info from './Info/Info'

const Login: FC = () => {
    const loginAction = () => ({type: ACTIONS_TYPE.LOGIN})
    const logoutAction = () => ({type: ACTIONS_TYPE.LOGOUT})
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log('Submitted');
        
        store.dispatch(loginAction())
    }
    return <Card>
        <form onSubmit={onSubmit}>
        <div>
            <label>Login</label>
            <input type='text' />
        </div>
        <div>
            <label>Password</label>
            <input type='text' />
        </div>
        <button type='submit'>log in</button>
    </form>
        <button>LOGOUT</button>
        <Info />
    </Card>
    
}

export default Login