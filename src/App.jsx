import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cars from './pages/Cars'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Update from './pages/Update'
import Add from './pages/Add'

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cars />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />

      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
