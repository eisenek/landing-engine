import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

interface Props {}

function Featured(props: Props) {
  const {} = props

  return (
    <Box pt="80px" pb="60px" display="flex" flexDirection="column" alignItems="center" my="60px">
      <Typography id="#featured" variant="h2">Watch, listen and <u>subscribe</u></Typography>
    </Box>
  )
}

export default Featured
