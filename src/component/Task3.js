
import React from 'react'

function Task3() {
  return (
    <div>
    <h6>task3</h6>
      <h3>Render Multiple Functional Components</h3>
      <Message1/>
      <Message2/>
    </div>
  )
}

export default Task3

function Message1(){
    return(
        <>
        <h4>Render Functional Components-1</h4>
        </>
    )
}
function Message2(){
    return(
        <>
        <h4>Render Functional Components-2</h4>
        </>
    )
}