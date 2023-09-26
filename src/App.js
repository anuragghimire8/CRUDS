import React from 'react'
import Create from './Components/Create'
import './App.css'
import Read from './Components/Read'
import { Route,Routes } from 'react-router'
import Edit from './Components/Edit'

function App() {
  return (
    <div className='container'>
    <Routes>
    <Route exact path ='/'  element={<Read/>}/>
    <Route excat path='/create' element={<Create/>}/>
    <Route exact path='/edit' element={<Edit/>}/>
    </Routes>
    
      
    </div>
  )
}

export default App
