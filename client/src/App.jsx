import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Header from './Components/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <div>
          <Header />
          <Route path='/' element={<Home />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile' element={<Profile />} />
        </div>
      </Routes>
    </BrowserRouter>
  )
}

export default App