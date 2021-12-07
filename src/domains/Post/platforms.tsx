import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ApplePodcasts from "../../shared/graphics/apple-podcasts.svg";
import GooglePodcasts from "../../shared/graphics/google-podcasts.svg";
import Spotify from "../../shared/graphics/spotify.svg";

interface Props {}

function Platforms(props: Props) {
  const {} = props;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: "2.5rem", width: {md: "52.5rem", xs: "100%"}, flexWrap: {xs: 'wrap', md: "nowrap"} }}
    >
      <Box textAlign="center" sx={{display: {xs: "none"}}}>
        <Typography variant="body1" color="primary">
          <strong>Listen on your favorite platform</strong>
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
      >
        <Box display="flex" flexDirection="column" flex="1">
          <MyButton>Anchor</MyButton>
          <MyButton startIcon={<ApplePodcasts />}>Apple Podcasts</MyButton>
        </Box>
        <Box display="flex" flexDirection="column" flex="1">
          <MyButton startIcon={<Spotify />}>Spotify</MyButton>
          <MyButton startIcon={<GooglePodcasts />}>Google Podcasts</MyButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Platforms;

function MyButton({ children, sx, ...props }: any) {
  return (
    <Button
      variant="contained"
      size="large"
      sx={{ color: "var(--color-main)", minWidth: {md: "15.3125rem"}, display: "inline-flex", whiteSpace: "pre", margin: {xs: "10px", md:"10px"}, ...(sx || {}) }}
      {...props}
    >
      {children}
    </Button>
  );
}
