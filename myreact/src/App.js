import React from 'react'
import "./App.css"
import Clock from './Constructor/reactClass';
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      name: "bn-BD"
    }
  }
  chnage = () => {
      this.setState({
        name : "en-US"
      })
  }
  chnage1 = () => {
      this.setState({
        name : "bn-BD"
      })
  }
  toggle=()=>{
    this.state.name === "en-US"  ? this.chnage() : this.chnage1() 
    console.log("called")
  }
  render(){
    return (
      <div className='App'>
        <h1>
          hello world
        </h1>
        <Clock locale={'bn-BD'}/>
        <button onClick={this.toggle}>chnage clock</button>
      </div>
    )
  }
}
export default App
