import React, { Profiler } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./home"
import Signin from "./signin"
import Signup from "./signup"
import Profile from "./profile"

export default function App() {
  return (
    
   < BrowserRouter>
   <Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/signin" element={<Signin />}></Route>
  <Route path="/signup" element={<Signup />}></Route>
  <Route path="/profile" element={<Profile />}></Route>
   </Routes>
   </BrowserRouter>

  )
}
