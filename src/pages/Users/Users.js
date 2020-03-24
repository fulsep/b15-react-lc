import React, {Component} from 'react'
import config from '../../utils/config'
import axios from 'axios'

import {
  Table, Container, Button,
  Row, Col, Form, FormGroup,
  Label, Input} from 'reactstrap'

import {Link} from 'react-router-dom'

class Users extends Component{
  constructor(props){
    super(props)
    this.state = {
      users: [],
      pageInfo: {
        page: 0,
        perPage: 0,
        totalData: 0,
        totalPage: 0
      },
      currentPage: 1,
      sort: 0
    }

    this.nextData = async() => {
      const results = await axios.get(config.APP_BACKEND.concat(`users?page=${this.state.currentPage+1}`))
      const {data} = results.data
      const {pageInfo} = results.data
      this.setState({users:data, pageInfo})
    }
    this.prevData = async() => {
      const results = await axios.get(config.APP_BACKEND.concat(`users?page=${this.state.currentPage-1}`))
      const {data} = results.data
      const {pageInfo} = results.data
      this.setState({users:data, pageInfo})
    }
    this.searchUser = async (e) => {
      const results = await axios.get(config.APP_BACKEND.concat(`users?search[username]=${e.target.value}`))
      const {data} = results.data
      const {pageInfo} = results.data
      this.setState({users:data, pageInfo})
    }
    this.sortUser = async () => {
      this.setState({sort:(this.state.sort?'':1)})
      const results = await axios.get(config.APP_BACKEND.concat(`users?sort[username]=${this.state.sort}`))
      const {data} = results.data
      const {pageInfo} = results.data
      this.setState({users:data, pageInfo})
    }
  }
  async componentDidMount(){
    const results = await axios.get(config.APP_BACKEND.concat('users'))
    const {data} = results.data
    const {pageInfo} = results.data
    this.setState({users:data, pageInfo})
  }

  render(){
    return(
      <>
        <Container>
          <Row>
            <Col md={12}>
              <Form>
                <FormGroup>
                  <Label>
                    Username
                  </Label>
                  <Input type='text' placeholder='input an username' onChange={this.searchUser} />
                </FormGroup>
              </Form>
            </Col>
          </Row>
          <Table>
            <thead>
              <tr>
                <th>No</th>
                <th onClick={this.sortUser}>Username</th>
                <th>Is Active</th>
                <th>Is Verified</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.length && this.state.users.map((v,i)=>(
                <tr key={this.state.users[i].id.toString()}>
                  <td>{this.state.users[i].id}</td>
                  <td>{this.state.users[i].username}</td>
                  <td>{this.state.users[i].is_active}</td>
                  <td>{this.state.users[i].is_verified}</td>
                  <td>
                    <Link className='btn btn-warning' to={`/user/edit/${this.state.users[i].id}`}>
                      Edit
                    </Link>
                    <Link className='btn btn-danger ml-2' to={`/user/delete/${this.state.users[i].id}`}>
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Row>
            <Col md={12} className='text-right'>
                Page {this.state.pageInfo.page}/{this.state.pageInfo.totalPage}
            </Col>
          </Row>
          <Row>
            <Col md={6} className='text-center'>
              <Button onClick={this.prevData} color='primary'>Prev</Button>
            </Col>
            <Col md={6} className='text-center'>
              <Button onClick={this.nextData} color='primary'>Next</Button>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Users