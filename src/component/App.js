import React, { Component } from 'react';
import {increment} from "../store/action/action.js"
import {connect} from "react-redux";
function mapStateProps(state){
  return {
      count:state.CounterReducer
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.Increment = this.Increment.bind(this)
    this.Decrement = this.Decrement.bind(this)
  }
  Increment() {
   console.log(this.props)
   this.props.dispatch(increment());
    increment();
  }
  Decrement() {
    console.log("decrement");
  }

  render() {
    return (
      <div>
        <p>{this.props.count}</p>
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.Decrement}>decrement</button>
      </div>
    );
  }
}
export default connect(mapStateProps)(App);
