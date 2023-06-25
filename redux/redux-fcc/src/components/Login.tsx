import {FC} from 'react'
import Card from './Card/Card'
import store from '../store/strore'

const Login: FC = () => {
    const loginAction = () => ({type: 'LOGIN'})
    store.dispatch(loginAction())
    return <Card>
        <form>
        <div>
            <label>Login</label>
            <input type='text' />
        </div>
        <div>
            <label>Password</label>
            <input type='text' />
        </div>
        <button>log in</button>
    </form>
    </Card>
}

export default Login