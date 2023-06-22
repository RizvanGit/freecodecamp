import React from 'react'

interface IProps {
    name?: string
}

interface IState{
    name: string
}

class ParentComponent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            name: 'CamperBot'
        }
    }
    render () {
        return (
            <div>
                <ChildComponent name={this.state.name} />
            </div>
        )
    }
}

class ChildComponent extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Hello, prop value is: {this.props.name}</h1>
            </div>
        )
    }
}

export default ParentComponent