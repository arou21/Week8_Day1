import React, { Component } from 'react'

export default class home extends Component {
  constructor(){
    console.log('i was constructed')
        super();
        this.state = {
            name: 'Shoha',
            age: 9000
        }

  }
  
  render() {
    return (
      <div>
        
        <h1>Home Page</h1>


      </div>
      
    )
  }
}
