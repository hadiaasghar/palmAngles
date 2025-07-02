import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // <-- Add Route here
import Home from './Pages/Home'
import UserLayout from './Components/layout/UserLayout'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Styles from './Pages/Styles'
import Kids from './Pages/Kids'

const App = () => {
  return (
        <BrowserRouter>
        <Routes>
         <Route path="/" element={<UserLayout />}>
         <Route index element={<Home />}/>
          <Route path="/men" element={<Men />}></Route>
          


          <Route path="/women" element={<Women />}></Route>
          <Route path="/style" element={<Styles />}></Route>
          <Route path="/kids" element={<Kids />}></Route>
         
         
         </Route>
        </Routes>
        </BrowserRouter>
   
  )
}

export default App
