import React from "react"

class LoginScreen extends React.Component {
    render() {
      return (
        <>
       
        <div style={{backgroundColor: "#90ee90"}}>
        <center>
          <h2>Log In</h2>
          <p>Username:</p>
          <input name="username" ></input>
          <br></br>
          <p>Password:</p>
          <input name="password" ></input>
          <br></br>
          </center>
          </div>
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
  
  