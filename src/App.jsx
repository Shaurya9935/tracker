import React from "react"
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
function App() {

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white">
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"></div>

      <div className="relative z-10">
        <Navbar/>
        <Routes>
          <Route path = "/dashboard" element = {<Dashboard/>} />
          <Route path = "/login" element = {<Login/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
