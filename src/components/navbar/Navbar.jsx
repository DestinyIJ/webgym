import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../../assets/images/Logo.png'

const Navbar = () => {
  const location = useLocation()
  const [pathname, setPathname] = useState('')
  
  
  useEffect(() => {
    setPathname(location.pathname)

  }, [location.pathname])
  
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ 
        gap: {sm: '122px', xs: '40px'},
        mt: { sm: '32px', xs: '20px'},
        justifyContent: "none",
        px: "20px"
        }}
    >
      <Link to={'/'}>
        <img src={Logo} alt="Logo" style={{ width: '48px', height: "48px", margin: "0 20px"}} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        {/* go-to home */}
        <Link to="/" style={{ 
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: `${pathname === '/' ? '3px solid #FF2625' : '0px'}`
          }}>
          Home
        </Link>
        {/* go-to exercises */}
        <Link to="/exercises" style={{ 
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: `${pathname.toString().includes('/exercises') ? '3px solid #FF2625' : '0px'}`
          }}>
          Exercises
        </Link>
      </Stack>
    </Stack>
  )
}

export default Navbar
