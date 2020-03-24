import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {
  Navbar as NavigationBar,
  NavbarBrand, NavbarToggler, Collapse,
  Nav, NavItem
} from 'reactstrap'

class Navbar extends Component{
  render(){
    return(
      <NavigationBar color='dark' dark expand='md'>
        <NavbarBrand>Live</NavbarBrand>
        <NavbarToggler />
        <Collapse isOpen={true} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <Link className='nav-link' to='/'>Home</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/about'>About</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/user'>Users</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/contact'>Contact Us</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </NavigationBar>
    )
  }
}

export default Navbar
