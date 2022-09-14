import React, { Component } from 'react'


//mount

class News extends Component {

  constructor(props){
    super(props)

    this.state = {
      count: 0,
      articles: []
    }
  }

  handleClick = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <>

        {this.state.count}

        <button onClick={handleClick}>Increment</button>
      </>

     
    )
  }
}

export default News