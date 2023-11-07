import { useState, useEffect } from 'react'
import './App.css'
import apiKey from './config'
import { Route, Routes, Navigate } from 'react-router'

//App components
import PhotoList from './PhotoList'
import Search from './Search'
import Nav from './Nav'


const baseUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}`;
function App() {

  // Usesate to store retrived data
  const [photos, setPhotos] = useState([])
  const [cats, setCats] = useState([])
  const [dogs, setDogs] = useState([])
  const [computers, setComputers] = useState([])

  useEffect(() => {
   return async () => {
    const cats = await fetchData("cats")
    const dogs = await fetchData("dogs")
    const computers = await fetchData("computers")
    setCats(cats)
    setDogs(dogs)
    setComputers(computers)
   }
    
  }, [])

  // Fetchdata function to handle fetch request
 async function fetchData (query) {
    try {
      const res =  await fetch(`${baseUrl}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      const data = await res.json()
      setPhotos(data.photos.photo)
      return data.photos.photo
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>

      {/* render search and Nav components */}
      <Search fetchData={fetchData}/>
      <Nav />
      
      {/* Routes and Route components */}
      <Routes>
        <Route path='/' element={<Navigate to="/cats"/>}/>
        <Route path='/cats' element={<PhotoList photos={cats} title={"Cats"}/>}/>
        <Route path='/dogs' element={<PhotoList photos={dogs} title={"Dogs"}/>}/>
        <Route path='/computers' element={<PhotoList photos={computers} title={"Computers"}/>}/>
        <Route path='/search/:query' element={<PhotoList photos={photos} title={"Query Results"}/>}/>
      </Routes>
    </div> 
  )
}

export default App
