import React from "react"
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Navbar from "./Form/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Signin from "./Form/Signin"
import Signup from "./Form/Signup"
import Awoofriday from "./Pages/awoofriday"
import ServiceCenter from "./Pages/serviceCenter"
import ServiceCenter2 from "./Pages/serviceCenter2"
import SignupPassword from "./Form/SignupPassword"
import Findus from "./Pages/About"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/findus" element={<Findus />} />
          </Route>

          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/SignupPassword" element={<SignupPassword />} />
          <Route path="/awoofriday" element={<Awoofriday />} />
          <Route path="/serviceCenter" element={<ServiceCenter />} />
          <Route path="/serviceCenter2" element={<ServiceCenter2 />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
