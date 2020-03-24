import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/Users/Users'
import UsersEdit from './pages/Users/Edit'
import ContactUs from './pages/ContactUs'

class App extends Component{
  render(){
    return(
      <Router>
        <Navbar/>
        <div className='content'>
          <Switch>
            <Route path='/' exact render={()=><Home/>} />
            <Route path='/about' exact render={()=><About/>} />
            <Route path='/user' exact render={()=><Users/>} />
            <Route path='/user/edit/:id' exact render={(props)=><UsersEdit {...props}/>} />
            <Route path='/contact' exact render={()=><ContactUs/>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
