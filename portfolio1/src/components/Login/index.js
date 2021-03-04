import React from "react"

class LoginScreen extends React.Component {
    render() {
      return (
        <>
        <center>
          <h2>Log In</h2>
          <p>Username:</p>
          <input name="username" ></input>
          <br></br>
          <p>Password:</p>
          <input name="password" ></input>
          <br></br>
          </center>
        </>
      )
    }
  }
  
  export default class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {username: '' }
    }

    render() {
      let screen
    
        screen = (
          <>
            <LoginScreen></LoginScreen>
          </>
        )
      return screen
    }
  }
  
  