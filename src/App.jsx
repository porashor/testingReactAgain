import React from 'react'
import ClassCom from './Components.jsx/ClassCom'

const App = () => {
  const ele = React.createElement("h1", null, "hello world")
  console.log(ele)
  return (
    <div>
      <ClassCom local="bn-BD"/>
    </div>
  )
}

export default App
