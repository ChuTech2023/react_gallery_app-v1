import { useState } from 'react'
import './App.css'
import apiKey from './config'
import { Route, Routes, Navigate } from 'react-router'
import PhotoList from './PhotoList'

function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to="/cats"/>}/>
        <Route path='/cats' element={<PhotoList/>}/>
        <Route path='/dogs' element={<PhotoList/>}/>
        <Route path='/computers' element={<PhotoList/>}/>
        <Route path='/search/:query' element={<PhotoList/>}/>
      </Routes>
    </div> 
  )
}

export default App
