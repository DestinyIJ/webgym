import React, { useState } from 'react'
import { Box } from '@mui/material'
import { SearchExercises, Exercises, BodyPart } from '../../components'
import { Outlet, Route, Routes, } from 'react-router-dom'

const ExercisesView = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  return (
    <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}  />
  )
}

const ExercisesPage = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  return (
    <>
      <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      margin: '40px'
    }}>
      <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises} />
      <Routes>
          <Route path="" element={<ExercisesView />} />
      </Routes>
      <Outlet />
    </Box>
    </>
  )
}

export default ExercisesPage
