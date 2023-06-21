/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'
interface IProps {

}
interface IState {
    name: string
}


class MyComponentSetState extends React.Component<IProps, IState> {
    constructor(props: IProps) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      // Change code below this line
      this.setState({name: 'React Rocks!'})
      // Change code above this line
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  }

export default MyComponentSetState