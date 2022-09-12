import React from 'react' //~Importing the React library

class Greeter extends React.Component{   //~Begins the definition of custom Component
  //Make Greeter return some JSX
  render() {
    return(
      
      //React interpolates the value of 'this.props.name' into the string "Hello Again, ___!"

      <h1>Hello again, {this.props.name}!</h1> 

      //1. We use 'this.props.name' to access 'name' prop
      //2. We use '{}' to interpolate a JavaScript value in JSX.


    )
  }
}

export default Greeter  //~Exporting Greeter Component so that it can be used in other files 




//NOTES
// render() method tells React what to draw to the page
//React will call render() automatically when its ready to display components
//There is a pair of () around the JSK with the opening ( on the same line as return
//Developers do this so they can format JSX with line breaks and indentation

//A class component MUST have two things:
  //1. extend.React.component
  //2. have a render() method that returns JSX



