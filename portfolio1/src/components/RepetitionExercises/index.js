import React from "react"

export default class RepetitionScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: this.props.value }
    }
    reset() {
        this.setState((prevState) => ({
            value: prevState.value - prevState.value,
        }))
    }
    addOne() {
        this.setState((prevState) => ({
            value: prevState.value + 1,
        }))
    }
    render() {
        return (
            <>
            <div style={{backgroundColor: "blue", color: "white"}}>
                <h2>{this.props.name}</h2>
                <p>Record how many {this.props.name} you completed </p>
                <p>Reps: {this.state.value}</p>
                <button onClick={() => this.addOne()}>Add One</button>
                <button onClick={() => this.reset()}>Reset</button>
                </div>
            </>
        )
    }
}

