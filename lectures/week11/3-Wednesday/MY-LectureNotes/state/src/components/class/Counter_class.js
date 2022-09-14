import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {

    super(props)
    this.state = {
      count: 0
    }
  }

  handleAddClick = () => {
    this.state.count++
  }


  //render is a function
  render() {

    let { count } = this.state

    return (
      <>
      Hello World <br />

      {/* <h1>{this.state.count}</h1> */}

      <br />

      <button onClick={this.handleAddClick}>Increment Count</button>

      </>
    )
  }
}

export default Counter