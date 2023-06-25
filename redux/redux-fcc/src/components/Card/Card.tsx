import {FC, ReactNode} from 'react'

const Card:FC<{children?: ReactNode}> = (props) => {
    return <div>
        {props.children}
    </div>
}

export default Card