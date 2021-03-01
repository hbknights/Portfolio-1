class LoginScreen extends React.Component {
    render() {
      console.log(this.props.login)
      return (
        <>
          <h2>Please Log In</h2>
          <input></input>
          <button onClick={() => this.props.login(true)}>Login</button>
        </>
      )
    }
  }
  
  export default class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = { loggedIn: true }
    }
    login = (status) => {
      console.log(status)
      this.setState({ loggedIn: status })
    }
    render() {
      let screen
      if (!this.state.loggedIn) {
        screen = (
          <>
            <LoginScreen login={this.login}></LoginScreen>
          </>
        )
      } else {
        screen = <MenuScreen login={this.login}></MenuScreen>
      }
      return screen
    }
  }
  
  