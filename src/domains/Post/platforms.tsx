import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ApplePodcasts from '../../shared/graphics/apple-podcasts.svg';
import GooglePodcasts from '../../shared/graphics/google-podcasts.svg';
import Spotify from '../../shared/graphics/spotify.svg';

interface Props {}

function Platforms(props: Props) {
  const {} = props

  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{marginTop: "2.5rem", width: "52.5rem"}}>
      <Box textAlign="center" ><Typography variant="body1" color='primary'><strong>Listen on your favorite platform</strong></Typography></Box>
      <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" >
        <MyButton>Anchor</MyButton>
        <MyButton startIcon={<Spotify />}>Spotify</MyButton>
        <MyButton startIcon={<ApplePodcasts />}>Apple Podcasts</MyButton>
        <MyButton startIcon={<GooglePodcasts />}>Google Podcasts</MyButton>
      </Box>
    </Box>
  )
}

export default Platforms


function MyButton({children, ...props}: any) {
  return (
    <Button
      variant="contained"
      size="large"
      sx={{ minWidth: "15.3125rem", display: "inline-flex", margin: "10px", color: "var(--color-main)" }}
      {...props}
    >
      {children}
    </Button>
  );
}
