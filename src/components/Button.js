import React, {Component} from 'react'
import styled from 'styled-components'

const Btn = styled('button')`
  width: 120px;
  height: 40px;
  border: 3px solid #f00;
  border-radius: 5px;
  background: #EEE;
`

class Button extends Component{
  render(){
    return(
      <Btn>Hello {this.props.children}</Btn>
    )
  }
}

export default Button
