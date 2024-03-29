import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../../assets/icons/gym.png'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack type="button" alignItems='center' 
      justifyContent='center' className="bodyPart-card"
      sx={{
          borderTop: `${bodyPart === item ? '4px solid #ff2625' : '0px'}`,
          backgroundColor: '#fff',
          borderBottomLeftRadius: '20px',
          width: "220px",
          height: "180px",
          cursor: 'pointer', 
          gap: '47px'
      }}
      onClick={() => {
        setBodyPart(item)
        window.scrollTo({ top: 1800, left: 100, behavior:'smooth'})
      }}
    >
      <img src={Icon} alt="dumbell" style={{ width: '40px', height: '40px'}} />
    </Stack>
  )
}

export default BodyPart