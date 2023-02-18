import React from 'react'
import './App.css'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { HomePage, ExercisesPage, ExercisePage } from './pages'

function App() {

  return (
    <Box width="400px" sx={{ width: { xl:'1488px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/exercises/*" element={<ExercisesPage />} > 
          <Route path=":exerciseId" element={<ExercisePage />} />
        </Route>
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
