import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from '../horizontal-scrollbar/HorizontalScrollbar'
import Loader from '../loader/Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs:'0'}}}>
        <Box my={12}>
            <Typography variant='h3' mb={6}>Exercises that target the same muscle group</Typography>
            <Stack direction={'row'} sx={{ p: '2', position: 'relative'}}>
                {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
            </Stack>
        </Box>

        <Box>
            <Typography variant='h3' mb={6}>Exercises that target the same equipment</Typography>
            <Stack direction={'row'} sx={{ p: '2', position: 'relative'}}>
                {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
            </Stack>
        </Box>
    </Box>
  )
}

export default SimilarExercises
