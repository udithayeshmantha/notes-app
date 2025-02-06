import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

const App = () => {
  return (
    <div>
      <RoutesComponent />
    </div>
  )
}

export default App