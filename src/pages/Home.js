import React, {Component} from 'react'

import Banner from '../components/Banner'
import Button from '../components/Button'

class Home extends Component{
  render(){
    return(
      <>
        <Banner/>
        <div>
          <Button>Budjang</Button>
        </div>
      </>
    )
  }
}

export default Home