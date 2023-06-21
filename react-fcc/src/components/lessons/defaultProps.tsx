import React from 'react'
import {PropTypes} from 'prop-types'

type SomeProps = unknown
export class CampSite extends React.Component<SomeProps> {
    constructor(props: SomeProps) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper />
        </div>
      );
    }
  }
  // Change code below this line
  
export const Camper: React.FC<{name?: string}> = (props) => {
    return <p>{props.name}</p>
  }
  
  Camper.defaultProps = {name: 'CamperBot'}
  Camper.propTypes = {name: PropTypes.string.isRequired}