import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import About from './About'
import Card from './card'
import Nav from './Nav'
export default function RootConfig() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
         <Route path="/"   element={<Nav/>}>  
         {/* <Route path="card" element={<Card/>}/> */}
         <Route path="/About" element={<About/>} />
         </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
