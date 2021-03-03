import React from "react"
export default class FoodScreen extends React.Component {
    constructor(props) {
      super(props)
      this.state = { value: parseInt(this.props.value,0) }
      
    }
    calorieCounter(totalPoints){
            this.setState((prevState) => ({
                value: prevState.value + totalPoints
            }))
    }
    render(){
      
        let objects = [
            { objType: "food", name: "Almonds", value: 2 },
            { objType: "food", name: "Animal Crackers", value: 3 },
            { objType: "food", name: "Asparagus", value: 0 },
            { objType: "food", name: "Bacon", value: 3 },
            { objType: "food", name: "Bagel", value: 3},
            { objType: "food", name: "Banana", value: 2 },
            { objType: "food", name: "Bread", value: 2 },
            { objType: "food", name: "Chocolate", value: 3 },
            { objType: "food", name: "Coca-Cola", value: 3 },
            { objType: "food", name: "Cucumber", value: 0 },
            { objType: "food", name: "Donuts", value: 5 },
            { objType: "food", name: "Hamburger", value: 6 },
            { objType: "food", name: "Hard Boiled Eggs ", value: 0 },
            { objType: "food", name: "Lettuce", value: 0 },
            { objType: "food", name: "Lucky Charms", value: 5 },
            { objType: "food", name: "Milk", value: 4 },
            { objType: "food", name: "Pizza", value: 6 },
            { objType: "food", name: "Potato", value: 3 },             
            { objType: "food", name: "Rice", value: 4 },
            { objType: "food", name: "Sprite", value: 3 },
            { objType: "food", name: "Watermelon", value: 1 },
            { objType: "food", name: "Yogurt", value: 4 },
          ]
        return(
            <>
            <div style={{backgroundColor: "#90ee90"}}>
              <center>
        <h2>Food Points</h2>
        <p>You  have 150 points per day</p>
        Calories: {this.state.value}
              <br></br>
        <ul style={{ "listStyleType": "none" }}>
                {objects.map((obj, index) =>
                  <li key={index}>
                    <button onClick={() =>
                      this.calorieCounter(obj.value)
                    }

                    >
                      {obj.name}
                    </button>
                    <br /><br />
                  </li>
                )}

              </ul>
              
              </center>
              </div>
        </>
        )
    }
}