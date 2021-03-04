import './App.css'
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
          <div style={{backgroundColor: "#90ee90"}}>
           <button onClick={() => this.setState({ currentScreen: LOGIN_SCREEN })}>Log In</button>
           <button onClick={() => this.setState({ currentScreen: FOOD_SCREEN })}>Calorie Tracker</button>
            <center>
              <h2>Exercises</h2>
              <p style={{color: "blue"}}>+ Repetition Exercise</p>
              <p style={{color: "purple"}}>* Duration Exercise</p>
              <ul style={{ "listStyleType": "none" }}>
                {objects.map((obj, index) =>
                  <li key={index}>
                    <button style={{color: obj.objType === "repetition" ? "blue" : "purple"}} onClick={() =>
                      this.setState({
                        currentScreen: obj.objType === "repetition" ? REPETITION_SCREEN : DURATION_SCREEN,
                        selectedItem: obj,
                      })
                    }

                    >
                      <strong>{obj.name}{obj.objType === "repetition" ? "+" : "*"}</strong>
                    </button>
                    <br /><br />
                  </li>
                )}

              </ul>
            </center>
            </div>
          </>
        )
        break
      case REPETITION_SCREEN:
        screen = (
          <>
          <body style={{backgroundColor: "blue", color: "white"}}>
            <RepetitionScreen{...this.state.selectedItem}></RepetitionScreen>
            <br></br>
            <button onClick={() => this.setState({ currentScreen: MENU })}>
              Back
            </button>
            </body>
          </>
        )
        break
      case DURATION_SCREEN:
        screen = (
          <>
          <body style={{backgroundColor: "purple", color: "white"}}>
            <DurationScreen {...this.state.selectedItem}></DurationScreen>
            <br></br>
            <button onClick={() => this.setState({ currentScreen: MENU })}>
              Back
            </button>
            </body>
          </>
        )
        break
        case FOOD_SCREEN:
          screen = (
            <>
            <body style={{backgroundColor: "#90ee90"}}>
            <button onClick={() => this.setState({ currentScreen: MENU })}>
                Back
              </button>
              <FoodScreen value={0} {...this.state.selectedItem}></FoodScreen>
              </body>
            </>
          )
          break
        case LOGIN_SCREEN:
          screen = (
            <>
            <body style={{backgroundColor: "#90ee90"}}>
              <LoginScreen></LoginScreen>
              <center>
              <button onClick={() => this.setState({ currentScreen: MENU })}>
                Login
              </button>
              </center>
              </body>
            </>
          )
          break
        default:
        screen = undefined;
    }
    
    return screen
  }
}

