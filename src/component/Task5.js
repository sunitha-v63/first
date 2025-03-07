import { Component } from "react";

class Text extends Component{
    getmsg(){
        return "Hello from Class Component!" 
    } 
    render(){
        
        return(
            <>
            <h6>task5</h6>
            <h3>Class Component with Static Text</h3>
            <h4>{this.getmsg()}</h4>
            </>
        )
    }
}
export default Text