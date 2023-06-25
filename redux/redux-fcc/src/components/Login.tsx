import {FC} from 'react'
import Card from './Card/Card'

const Login: FC = () => {
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