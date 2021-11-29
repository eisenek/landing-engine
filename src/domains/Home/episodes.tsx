import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

interface Props {}

function Episodes(props: Props) {
  const {} = props

  return (
    <Box display="flex" flexDirection="column" alignItems="center" py="60px">
      <Typography variant="h2">All episodes</Typography>
      {/* {episodes list} */}
      <Button variant="contained" color="primary">Show more episodes</Button>
    </Box>
  )
}

export default Episodes
