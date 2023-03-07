import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Genre from './pages/Genre'
import React from 'react'
const App=()=> {

  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/genre" element={<Genre/>}/>
    </Routes>
    </>
  )
}

export default App
