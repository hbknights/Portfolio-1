import './App.css';
import React from "react"
import RepetitionScreen from "./components/RepetitionExercises"
import DurationScreen from "./components/DurationExercises"
import LoginScreen from "./components/Login"


const MENU = "menu"
const REPETITION_SCREEN = "repetition_screen"
const DURATION_SCREEN = "duration_screen"

export default class MenuScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentScreen: MENU, selectedItem: undefined, loggedin: true}
  }
  login = (status) => {
    console.log(status)
    this.setState({ loggedIn: status })
  }
  render() {
    let objects = [
      { objType: "repetition", name: "Burpees ", value: 0 },
      { objType: "repetition", name: "Push Ups ", value: 0 },
      { objType: "repetition", name: "Squats ", value: 0 },
      { objType: "repetition", name: "Crunches ", value: 0 },
      { objType: "repetition", name: "Curtsy Lunges ", value: 0 },
      { objType: "duration", name: "Jumping Jacks " },
      { objType: "duration", name: "Wall Sit " },
      { objType: "duration", name: "Flutter Kicks " },
      { objType: "duration", name: "Plank " },
      { objType: "duration", name: "Tricep Dips " },
    ]
    let screen
    switch (this.state.currentScreen) {
      case MENU:
        screen = (
          <>
            <center>
              <h2>Exercises</h2>
              <p>+ Repetition Exercise</p>
              <p>* Duration Exercise</p>
              <ul style={{ "list-style-type": "none" }}>
                {objects.map((obj, index) =>
                  <li key={index}>
                    <button onClick={() =>
                      this.setState({
                        currentScreen: obj.objType === "repetition" ? REPETITION_SCREEN : DURATION_SCREEN,
                        selectedItem: obj,
                      })
                    }

                    >
                      {obj.name}{obj.objType === "repetition" ? "+" : "*"}
                    </button>
                    <br /><br />
                  </li>
                )}

              </ul>
              
            <button onClick={() => this.props.login(false)}>Log out</button>

            </center>
          </>
        )
        break
      case REPETITION_SCREEN:
        screen = (
          <>
            <RepetitionScreen{...this.state.selectedItem}></RepetitionScreen>
            <button onClick={() => this.setState({ currentScreen: MENU })}>
              Back
            </button>
          </>
        )
        break
      case DURATION_SCREEN:
        screen = (
          <>
            <DurationScreen {...this.state.selectedItem}></DurationScreen>
            <button onClick={() => this.setState({ currentScreen: MENU })}>
              Back
            </button>
          </>
        )
        break
      default:
        screen = undefined
    }

    return screen
  }
}


