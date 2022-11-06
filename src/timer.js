import { Component } from "react";

class Timer extends Component{
    constructor(){
        super()
        this.state={
            Timer:0,
            intervall: null
        }
    }
    componentDidMount(){
        this.setState({intervall:setInterval(() => {this.setState({timer:this.state.Timer +1})}, 1000)})
    }

    render(){
        return(
            <div>
                <h2>{this.state.Timer}</h2>
            </div>
        )
    }
}
export default Timer