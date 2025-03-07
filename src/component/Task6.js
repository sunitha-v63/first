import { Component } from "react";

class Msgone extends Component{
    render(){
return(<>
<h4>Message-one</h4>
</>)
    }
}
class Msgtwo extends Component{
    render(){
        return(<>
        <h4>Message-two</h4>
</>)
    }
}

function Main(){
    return(<>
    <h6>task6</h6>
    <Msgone/>
    <Msgtwo/>
    </>

    )
}export default Main;