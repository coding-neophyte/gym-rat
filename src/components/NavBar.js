import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/Logo.png'


const NavBar = () => {
  return (
    <Stack>
        <Link to='/'>
            <img src={Logo} alt='logo'/>
        </Link>
    </Stack>
  )
}

export default NavBar
