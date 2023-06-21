import {FC, Component} from 'react'
import PropTypes from 'prop-types'

export const Items:FC<{quantity: number}> = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
  // Change code below this line
  Items.propTypes = {quantity: PropTypes.number.isRequired}
  // Change code above this line
  
  Items.defaultProps = {
    quantity: 0
  };

  type SampleProps = unknown
  
export  class ShoppingCart extends Component<SampleProps> {
    constructor(props: SampleProps) {
      super(props);
    }
    render() {
      return <Items quantity={10}/>
    }
  }