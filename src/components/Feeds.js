import React from 'react'
import Post from './Post'
import { Box } from '@mui/material'

function Feeds() {
  return (
    <Box flex={4} p={1}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </Box>
  )
}

export default Feeds