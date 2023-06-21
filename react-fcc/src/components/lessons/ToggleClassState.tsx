/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'

interface IProps {

}
interface IState {
    visibility: boolean,
}
class ToggleComponent extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            visibility: false,
        }
        this.toggleVisibility = this.toggleVisibility.bind(this)
    }
    toggleVisibility() {
        this.setState(state => ({visibility: !state.visibility}))
    }
    render(): React.ReactNode {
        return (
            <div>
                <button onClick={this.toggleVisibility}>Click me!</button>
                {this.state.visibility && <h1>Now you see me!</h1>}
            </div>
        )
    }
}

export default ToggleComponent