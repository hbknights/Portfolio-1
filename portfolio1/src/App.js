import './App.css';
import React from "react"
import RepetitionScreen from "./components/RepetitionExercises"
import DurationScreen from "./components/DurationExercises"
import LoginScreen from "./components/Login"
import FoodScreen from "./components/Food"

const MENU = "menu"
const LOGIN_SCREEN = "login"
const REPETITION_SCREEN = "repetition_screen"
const DURATION_SCREEN = "duration_screen"
const FOOD_SCREEN = "food_screen"

export default class MenuScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentScreen: MENU, selectedItem: undefined }
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
           <button onClick={() => this.setState({ currentScreen: LOGIN_SCREEN })}>Log In</button>
           <button onClick={() => this.setState({ currentScreen: FOOD_SCREEN })}>Calorie Tracker</button>
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
        case FOOD_SCREEN:
          screen = (
            <>
              <FoodScreen {...this.state.selectedItem}></FoodScreen>
              <button onClick={() => this.setState({ currentScreen: MENU })}>
                Back
              </button>
            </>
          )
          break
        case LOGIN_SCREEN:
          screen = (
            <>
              <LoginScreen></LoginScreen>
              <button onClick={() => this.setState({ currentScreen: MENU })}>
                Login
              </button>
            </>
          )
          break
        default:
        screen = undefined;
    }
    
    return screen
  }
}

