import {FC} from 'react'
import Card from '../Card/Card'
import store from '../../store/strore'

const Info: FC = () => {
    const currentStore = store.getState()
    console.log('INFO COMPONENT RENDER')
    return <Card>
        <>
            <h2>Store Info:</h2>
            <p>{currentStore.logged.toString()}</p>
        </>
    </Card>
}

export default Info