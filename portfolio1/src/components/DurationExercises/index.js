import React from "react"

export default class DurationScreen extends React.Component {
    state = {
        timer: null,
        counter: '00',
        miliseconds: '00',
        startDisabled: true,
        stopDisabled: false
    }
    constructor(props) {
        super(props);
        this.onButtonClear = this.onButtonClear.bind(this);
        this.start = this.start.bind(this);
    }
    start() {
        var self = this;
        let timer = setInterval(() => {
            var num = (Number(this.state.miliseconds) + 1).toString(),
                count = this.state.counter;

            if (Number(this.state.miliseconds) === 99) {
                count = (Number(this.state.counter) + 1).toString();
                num = '00';
            }

            self.setState({
                counter: count.length === 1 ? '0' + count : count,
                miliseconds: num.length === 1 ? '0' + num : num
            });
        }, 0);
        this.setState({ timer });
    }
    onButtonStop() {
        clearInterval(this.state.timer);
        this.setState({ startDisabled: false, stopDisabled: true });
    }
    onButtonClear() {
        this.setState({
            timer: null,
            counter: '00',
            miliseconds: '00'
        });
    }

    render() {
        return (
            <>
            <div style={{backgroundColor: "purple", color: "white"}}>
                <h2>{this.props.name}</h2>
                <p>Time how long you can do {this.props.name} for </p>
                <p>Timer: {this.state.counter}:{this.state.miliseconds}</p>
                <button onClick={() => this.start()} >Start</button>
                <button onClick={() => this.onButtonStop()}>Stop</button>
                <button onClick={() => this.onButtonClear()} >Reset</button>
                </div>
            </>

        );
    }

}