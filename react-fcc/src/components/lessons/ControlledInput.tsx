/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'

interface IProps{

}
interface IState{
    input: string
}

class ControlledInput extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            input: ''
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({input: e.target.value})
    }
    render() {
        return (
            <div>
                <input type='text' value={this.state.input} onChange={this.onChange} />
                <h3>{this.state.input}</h3>
            </div>
        )
    }
}

export default ControlledInput