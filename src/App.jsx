import { useState } from 'react'
import './App.css'
import apiKey from './config'
import { Route, Routes, Navigate } from 'react-router'
import PhotoList from './PhotoList'
import Search from './Search'
import Nav from './Nav'


const baseUrl = "http://api.flickr.com/services/rest/";
function App() {
  
 async function fetchData (query) {
    try {
      const opts = {
        method: 'flickr.photos.search',
        api_key: apiKey,
        sort: 'relevance',
        tags: query,
        per_page: 24,
        format: 'json',
        mode: "no-cors",
        nojsoncallback: 1
    };
  
      const res =  await fetch(baseUrl,opts)
      // const data = await res.json()
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  fetchData("?text=cats")
  return (
    <div>

      {/* render seaarch and Nav components */}
      <Search />
      <Nav />
      
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
