import React from 'react'
import ClassCom from './Components.jsx/ClassCom'
import FormSi from './Components.jsx/FormSi'
import Log from './Components.jsx/Log'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components.jsx/pages/Home'
import Nav from './Components.jsx/Nav';
import SignIn from "./Components.jsx/FormSi"
import Contact from "./Components.jsx/pages/Contact"
const App = () => {
  return (
    <div>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/log" element={<Log/>}/>
          <Route path="/signout" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
