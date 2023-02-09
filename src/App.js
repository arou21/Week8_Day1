import React, { Component } from 'react'
import Login from './Login'
import Home from './Home'
import Nav from './Nav'
import './App.css';



export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>

        <Home/>

        <Login/>

      </div>
      
    )
  }
}


