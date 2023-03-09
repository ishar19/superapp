import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Genre from './pages/Genre'
import Movies from './pages/Movies'
import Browse from './pages/Browse'
import React from 'react'
const App=()=> {

  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/genre" element={<Genre/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path='/browse' element={<Browse/>}/>
    </Routes>
    </>
  )
}

export default App
