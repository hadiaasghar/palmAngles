import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // <-- Add Route here
import Home from './Pages/Home'
import UserLayout from './Components/layout/UserLayout'

const App = () => {
  return (
        <BrowserRouter>
        <Routes>
         <Route path="/" element={<UserLayout />}>
         <Route index element={<Home />}/>
         
         
         </Route>
        </Routes>
        </BrowserRouter>
   
  )
}

export default App
