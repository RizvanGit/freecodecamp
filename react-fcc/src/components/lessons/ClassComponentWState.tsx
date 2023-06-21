/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'

interface IProps {

}
interface IState {
    name: string
}


class MyComponent extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            name: 'freeCodeCamp' //type is IState
        }
    }
    render() {
        const name = this.state.name
        return (
            <div>
                <h1>
                    {name}
                </h1>
            </div>
        )
    }
}

export default MyComponent