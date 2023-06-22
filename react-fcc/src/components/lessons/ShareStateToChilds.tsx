import React from 'react'

type InputEvent = React.ChangeEvent<HTMLInputElement>
type HandleType =  (e: InputEvent) => void

interface IProps {
    input?: string,
    handleChange?: HandleType,
}

interface IState {
    inputValue: string
}
class ParentComponent2 extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event: InputEvent) {
        this.setState({inputValue: event.target.value})
    }
    render(){
        return (
            <div>
                <ChildInput1 input={this.state.inputValue} handleChange={this.handleChange}/>
                <ChildRender1 input={this.state.inputValue} />
            </div>
        )
    }
}
class ChildInput1 extends React.Component<IProps, IState>{
    constructor(props: IProps){
        super(props)
    }
    render(){
        return (
            <div>
                <h3>Get input:</h3>
                <input type='text' value={this.props.input} onChange={this.props.handleChange} />
            </div>
        )
    }
}

class ChildRender1 extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
    }
    render(): React.ReactNode {
        return (
            <div>
                <h3>Input Render:</h3>
                <p>{this.props.input}</p>
            </div>
        )
    }
}
export default ParentComponent2