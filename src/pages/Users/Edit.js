import React, {Component} from 'react'

class Edit extends Component{
  constructor(props){
    super(props)
    this.state = {
      id: 0
    }
  }
  componentDidMount(){
    this.setState({id:this.props.match.params.id})
  }
  render(){
    const {id} = this.state
    return(
    <div>Edit Data {id}</div>
    )
  }
}

export default Edit