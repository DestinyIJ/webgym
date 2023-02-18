import React, { useEffect, useState } from 'react'
import { Pagination, Box, Stack, Typography } from '@mui/material'
import { exerciseDBoptions, fetchData } from '../../utils'
import { ExerciseCard, Spinner } from '../../components'

const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com/exercises'

const Exercises = ({ exercises, setExercises, bodyPart, setBodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9

  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1800, behavior: 'smooth'})
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []

      if(bodyPart === "all") {
        exercisesData = await fetchData(exerciseDBUrl, exerciseDBoptions)
      } else {
        exercisesData = await fetchData(`${exerciseDBUrl}/bodyPart/${bodyPart}`, exerciseDBoptions)
      }

      setExercises(exercisesData)
    }

    fetchExercisesData()

  }, [bodyPart])

  return (
    <Box id="exercises" sx={{ mt: { lg:'110px' }}} mt="50px" p="20px">
      <Typography variant='h3' mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px'}}}
        flexWrap="wrap" justifyContent="center"
      >
        {
          exercises.length ? currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          )) : <Spinner />
        }
      </Stack>
      <Stack mt="100px" alingItems="center">
        {
          exercises.length > exercisesPerPage && (
            <Pagination 
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / 9)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )
        }
      </Stack>
    </Box>
  )
}

export default Exercises
