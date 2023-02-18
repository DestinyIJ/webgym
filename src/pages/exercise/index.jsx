import React, { useEffect, useState } from 'react'
import { Pagination, Box, Stack, Typography } from '@mui/material'
import { exerciseDBoptions, youtubeSearchOptions, fetchData } from '../../utils'
import { ExerciseCard, ExerciseDetails, ExerciseVideo, SimilarExercises } from '../../components'
import { useParams } from 'react-router-dom'

const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com'
const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

const ExercisePage = ({ exercises}) => {
  const { exerciseId } = useParams()
  const [ exerciseDetail, setExerciseDetail ] = useState({})
  const [ exerciseVideos, setExerciseVideos ] = useState([])
  const [ similarTargetMuscle, setSimilarTargetMuscle ] = useState([])
  const [ similarEquipments, setSimilarEquipments ] = useState([])


  useEffect(() => {
    const fetchExerciseData = async() => {
      const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${exerciseId}`, exerciseDBoptions)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData?.name}`, youtubeSearchOptions)
      setExerciseVideos(exerciseVideosData?.contents)

      const similarTargetMuscleData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData?.target}`, exerciseDBoptions)
      setSimilarTargetMuscle(similarTargetMuscleData)

      const similarEquipmentsData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData?.equipment}`, exerciseDBoptions)
      setSimilarEquipments(similarEquipmentsData)
    }
  }, [exerciseId])
  
  return (
    <Box id="exercises" sx={{ mt: { lg:'110px' }}} mt="50px" p="20px">
      <ExerciseDetails exerciseDetail={exerciseDetail} />
      <ExerciseVideo name={exerciseDetail?.name} exerciseVideos={exerciseVideos} />
      <SimilarExercises targetMuscleExercises={similarTargetMuscle} equipmentExercises={similarEquipments} />
    </Box>
  )
}

export default ExercisePage
