import React from "react";
import Timer from "./timer";

class App extends React.Component{
  constructor(){
    super()
    this.state={
      fullName: 'Khawla',
      Bio : 'I have 30 years old,i am a designer and a futur developer',
      imgSrc: './profile.jpeg',
      profession: 'Designer',
      show:false


    }
  }
  Show(){
    this.setState({show:!this.state.show})
  }
  render(){
    return(
      <>
      <h3>{this.state.fullName} </h3>
      <p>{this.state.Bio} </p>
      <h4>{this.state.profession} </h4>
      <img src={'./profile.jpeg'}/> 
      <button onClick={(()=>this.Show())}>Show profile</button>
      {Timer}
      {this.state.show &&<App/>}
      </>
    )
  }
}

export default App;
