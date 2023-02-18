import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Spinner from '../spinner/Spinner'

const ExerciseVideo = ({ name, exerciseVideos }) => {
  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px'}}} p='20px'>
        <Typography variant='h3' mb='33px'>
            Watch <span style={{ color: '#ff2635', textTransform: 'capitalize'}}>{name}</span> Exercise Videos
        </Typography>
        <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
            sx={{
                flexDirection: { lg: 'row' },
                gap: { lg: '110px', xs: '0'}
            }}
        >
            {
                exerciseVideos.length ? exerciseVideos?.slice(0, 6).map((item, index) => (
                    <a key={index} className='exercise-video' 
                        href={`https://www.youtube.com/watch?v=${item?.video.videoId}`}
                        target="_blank" rel='noreferrer'
                    >
                        <img src={item?.video?.thumbnails[0]?.url} alt={item?.video?.title} />
                        <Box>
                            <Typography variant='h4' color='#000'>
                                {item?.video?.title}
                            </Typography>
                            <Typography variant='h6' color='#000'>
                                {item?.video?.channlName}
                            </Typography>
                        </Box>
                    </a>
                )) : <Spinner />
            }
        </Stack>
    </Box>
  )
}

export default ExerciseVideo
