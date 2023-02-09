import React, { Component } from 'react'

export default class login extends Component {
  render() {
    return (
      // <div>login</div>

      <div>
        <form class="row g-3">
          <div class="col-auto">
          <input type="email" class="form-control" id="inputEmail" placeholder="Email"></input>
            
          </div>
          <div class="col-auto">
            <label for="inputPassword2" class="visually-hidden">Password</label>
            <input type="password" class="form-control" id="inputPassword2" placeholder="Password"></input>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">Sign In</button>
          </div>
        </form>
      </div>
    )
  }
}
