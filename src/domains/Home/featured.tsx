import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ApplePodcasts from "../../shared/graphics/apple-podcasts.svg";
import GooglePodcasts from "../../shared/graphics/google-podcasts.svg";
import Spotify from "../../shared/graphics/spotify.svg";
import YouTube from "../../shared/graphics/yt.svg";
interface Props {}

function Featured(props: Props) {
  const {} = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{marginBottom: {xs: "3.75rem", md: "7.5rem"}}}
    >
      <Typography id="#featured" variant="h2">
        Watch, listen and <u>subscribe</u>
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          marginLeft: { xs: "2.5rem", md: "5rem" },
          marginRight: { xs: "2.5rem", md: "5rem" },
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        <Box
          borderRadius="28px"
          sx={{
            backgroundColor: "primary.main",
            width: { xs: "233px", md: "620px" },
            height: { xs: "131px", md: "349px" },
            marginTop: { xs: "2.5rem" },
          }}
        >
          &nbsp;
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            marginLeft: { md: "5.875rem", xs: "auto" },
            marginTop: { xs: "1.75rem", md: "2.5rem" },
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          <Box
            pb="2.5rem"
            justifyContent="center"
            alignItems="center"
            sx={{ maxWidth: "510px", textAlign: "center" }}
          >
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Subscribe to the Smart City Navigators podcast on your favorite
              platform and never miss an episode
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            sx={{ flexWrap: { xs: "nowrap", md: "nowrap" } }}
          >
            <Box display="flex" flexDirection="column" flex="1">
              <MyButton
                sx={{ margin: {xs: "5px", md:"10px"}}}
                startIcon={<YouTube />}
              >
                YouTube
              </MyButton>
              <MyButton
                sx={{ margin: {xs: "5px", md:"10px"}}}
                startIcon={<Spotify />}
              >
                Spotify
              </MyButton>
              <MyButton
                sx={{ margin: {xs: "5px", md:"10px"}}}
                startIcon={<GooglePodcasts />}
              >
                Google Podcasts
              </MyButton>
            </Box>
            <Box display="flex" flexDirection="column" flex="1">
              <MyButton sx={{ margin: {xs: "5px", md:"10px"} }}>Anchor</MyButton>
              <MyButton
                sx={{ margin: {xs: "5px", md:"10px"}}}
                startIcon={<ApplePodcasts />}
              >
                Apple Podcasts
              </MyButton>
              <Box display="flex" flexGrow="1" justifyContent="center" alignItems="center" sx={{margin: {xs: "5px", md:"10px"}}}><Typography variant="body2" color="text.secondary">...and others</Typography></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>)}

function MyButton({ children, sx, ...props }: any) {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      sx={{ color: "#3b8ded", minWidth: {md: "15.3125rem"}, display: "inline-flex", whiteSpace: "pre", ...(sx || {}) }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default Featured;
