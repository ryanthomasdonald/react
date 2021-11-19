import React, { Component } from "react";

class CounterClass extends Component {
    constructor(props) {
        // call base class const. and pass in props
        super(props)
        // list of key/value pairs to be kept in state
        this.state = {
            count: this.props.initialCount
        }
    }

    handleNumPlus = () => {
        this.setState((state, props) => ({
            count: state.count + props.stepSize
        }))
    }

    handleNumMinus = () => {
        this.setState((state, props) => ({
            count: state.count - props.stepSize
        }))
    }

    handleNumReset = () => {
        this.setState({
            count: 0
        })
    }

    render() {
        // console.log("I've been updated.")
        const {count} = this.state
        return (
            <>
                <h1>{count}</h1>
                <button onClick={this.handleNumPlus}>Increment</button><br />
                <button onClick={this.handleNumMinus}>Decrement</button><br />
                <button onClick={this.handleNumReset}>Reset</button>
            </>
        )
    }
}

export default CounterClass;