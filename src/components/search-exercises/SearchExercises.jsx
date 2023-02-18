import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { SearchOffSharp } from '@mui/icons-material'
import { fetchData, exerciseDBoptions, excerciseNinjaOptions } from '../../utils'
import HorizontalScrollbar from '../horizontal-scrollbar/HorizontalScrollbar'

const exerciseNinjaUrl = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises'
const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com/exercises'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [searchText, setSearchText] = useState('')
  const [bodyParts, setBodyParts] = useState(['all', 'cardio'])

  // useEffect(() => {
  //   const fetchExercise = async () => {
  //     // const bodyPartsData = await fetchData('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises/bodyPartList')

  //     const bodyPartsData = await fetchData(`${exerciseDBUrl}/bodyPartList`)

  //     if(bodyPartsData.length > 0) {
  //       setBodyParts(['all', ...bodyPartsData])
  //     }
  //   }

  //   fetchExercise()
  // }, [])

  const handleSearch = async () => {
    if(searchText) {
      
      const exercisesData = await fetchData(exerciseDBUrl, exerciseDBoptions)
      // const exercisesData = await fetchData(exerciseNinjaUrl, excerciseNinjaOptions)

      console.log(exercisesData)
      const searchedExercises = exercisesData.filter(exercise => 
        exercise?.name?.toLowercase.includes(searchText.toLowerCase()) || 
        exercise?.equipment?.toLowercase.includes(searchText.toLowerCase()) ||
        exercise?.muscle?.toLowercase.includes(searchText.toLowerCase()) ||
        exercise?.type?.toLowercase.includes(searchText.toLowerCase()) ||
        exercise?.target?.toLowercase.includes(searchText.toLowerCase()) || 
        exercise?.bodyPart?.toLowercase.includes(searchText.toLowerCase())
      )
      
      setSearchText('')
      setExercises(searchedExercises)
    }
  }

  return (
    <Stack alignItems={'center'} mt="37px" justifyContent={'center'} p="20px">
      <Typography fontWeight={700} textAlign="center" mb={'50px'} sx={{ fontSize: { lg: '44px', xs: '30px'} }}>
        <span>Awesome Exercises You</span> <br /> <span style={{ color: "#FF2625"}}>Should Workout</span>
      </Typography>
      <Box display={'flex'} position={'relative'} mb="72px">
        <TextField height="76px" value={searchText} 
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Exercises" type="text"
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px'},
            width: { lg: '1170px', xs: '350px'},
            backgroundColor: '#fff',
            borderRadius: "40px"
          }}
        />

        <Button
          className='search-btn'
          sx={{
            bgcolor: '#FF2625',
            color: "#fff",
            textTransform: 'none',
            width: { lg: '175px', xs: '80px'},
            fontSize: { lg: '20px', xs: '14px'},
            height: "56px",
            position: 'absolute',
            right: '0px'
          }}
          onClick={(e) => handleSearch()}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px'}}>
          <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </Box>
    </Stack>
  )
}

export default SearchExercises