import React from 'react'
import Task2 from './component/Task2'
import Task3 from './component/Task3'
import Create from './component/Task4'
import Text from './component/Task5'
import Main from './component/Task6'

function App() {
  const messgae="Welcome to React!"
  return (
    <div>
        <h6>Task1</h6>
        <h3>Functional Component Creation</h3>
        <h2>{messgae}</h2>
        <Task2/>
        <Task3/>
        <Create/>
        <Text/>
        <Main/>
    </div>
  )
}

export default App