import React from "react"
export default class FoodScreen extends React.Component {
    constructor(props) {
      super(props)
      this.state = { value: this.props.value }
      
    }
    calorieCounter(){
            this.setState((prevState) => ({
                value: prevState.value + this.state.value
            }))
    }
    render(){
      
        let objects = [
            { objType: "food", name: " Hard Boiled Eggs ", value: 0 },
            { objType: "food", name: "Cucumber", value: 0 },
            { objType: "food", name: "Lucky Charms", value: 25 },
            { objType: "food", name: "Chocolate Pudding", value: 45 },
            { objType: "food", name: "Donuts", value: 50 },
            { objType: "food", name: "Tomatoes", value: 0 },
          ]
        return(
            <>
        <h2>Food Points</h2>
        <p>You  have 300 points per day</p>
        <ul style={{ "listStyleType": "none" }}>
                {objects.map((obj, index) =>
                  <li key={index}>
                    <button onClick={() =>
                      this.calorieCounter()
                    }

                    >
                      {obj.name}
                    </button>
                    <br /><br />
                  </li>
                )}

              </ul>
              Calories: {this.state.value}
              <br></br>
        </>
        )
    }
}