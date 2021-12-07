import { Divider, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface Props {}

function Footer(props: Props) {
  const {} = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      sx={{
        backgroundColor: "var(--color-main)",
        paddingLeft: {md: "5rem", xs: "1.1875rem"},
        paddingRight: {md: "5rem", xs: "1.1875rem"},
        paddingTop: {md: "5rem", xs: "2.5rem"},
        paddingBottom: "2.5rem"
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        width="100%"
        sx={{justifyContent: {xs: "flex-start", md: "flex-end"}}}
      >
        <Box display="flex" sx={{flexBasis: {md: "50%", xs: "100%"}, justifyContent: {md: "space-between", xs: "space-evenly"}}}>
          <Box display="flex" flexDirection="column" margin="12px">
            <Typography variant="body1" color="white" pb="20px">
              <strong>Smart City Navigators</strong>
            </Typography>
            <Link component="a" href="#" underline="none" pb="12px">
              <Typography variant="body1" color="white">
                Subscribe
              </Typography>
            </Link>
            <Link component="a" href="" underline="none" pb="12px">
              <Typography variant="body1" color="white">
                About
              </Typography>
            </Link>
            <Link component="a" href="" underline="none" pb="12px">
              <Typography variant="body1" color="white">
                Episodes
              </Typography>
            </Link>
            <Link component="a" href="" underline="none" pb="12px">
              <Typography variant="body1" color="white">
                Contact
              </Typography>
            </Link>
            <Link component="a" href="" underline="none">
              <Typography variant="body1" color="white">
                Naviparking Blog
              </Typography>
            </Link>
          </Box>
          <Box display="flex" flexDirection="column" margin="12px">
            <Typography variant="body1" color="white" pb="20px">
              <strong>Listen On</strong>
            </Typography>
            <Link component="a" href="#" underline="none" pb="12px">
              <Typography variant="body1" color="white">
                YouTube
              </Typography>
            </Link>
            <Link component="a" href="" underline="none" pb="12px">
              <Typography variant="body1" color="white">
                Anchor
              </Typography>
            </Link>
            <Link component="a" href="" underline="none" pb="12px">
              <Typography variant="body1" color="white">
                Spotify
              </Typography>
            </Link>
            <Link component="a" href="" underline="none" pb="12px">
              <Typography variant="body1" color="white">
                Apple Podcasts
              </Typography>
            </Link>
            <Link component="a" href="" underline="none" pb="12px">
              <Typography variant="body1" color="white">
                Google Podcasts
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItem="center"
        width="100%"
        marginTop="5rem"
      >
        <Divider thick sx={{ border: "2px solid #3deabf", width: "90%" }} />
      </Box>
      <Box
        display="flex"
        width="100%"
        justifyContent="center"
        alignItems="center"
        mt="22px"
        mb="1rem"
      >
        <Typography variant="body2" color="#3deabf">
          <span>&copy;</span>
          {` ${new Date(
            Date.now()
          ).getFullYear()} Naviparking Poland Sp. z o.o.`}
        </Typography>
      </Box>
    </Box>)}

export default Footer;
