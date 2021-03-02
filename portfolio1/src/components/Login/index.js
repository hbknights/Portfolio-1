import React from "react"

class LoginScreen extends React.Component {
    render() {
      return (
        <>
          <h2>Please Log In</h2>
          <input name="username" ></input>
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
  
  