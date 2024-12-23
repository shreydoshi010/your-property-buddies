import React from 'react'
import { Typography } from '@mui/material'
import { Button } from './ui/Button'

const Navbar = () => {
  return (
    <>
    <Typography variant='h1'>
      asdfasdf
    </Typography>
    <Button variant='default' size='default'><Typography variant='button'>GET STARTED</Typography></Button>
    <Button variant='outline' size='default'><Typography variant='button'>LOGIN</Typography></Button>
    <Button variant='outlinePrimary' size='default'><Typography variant='button'>LOGIN</Typography></Button>
    </>
  )
}

export default Navbar
