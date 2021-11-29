import { AppBar, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HeaderImage from "./scn-podcast-white.svg";
import Logo from "./shape.svg";
type Props = {};

const Header: React.FC<Props> = (props) => {
  return (
    <AppBar
      position="relative"
      sx={{ backgroundColor: "rgba(59, 141, 237, 0.8)" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          paddingBottom: { xs: "2.75rem", md: "9.5rem" },
          paddingTop: { xs: "2.75rem", md: "7.5rem" },
          margin: "auto",
        }}
      >
        <Box sx={{width: {xs: "233px", md: "483px"}}}>
          <HeaderImage />
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-around"
          alignItems="center"
          pt="34px"
          pb="40px"
          sx={{maxWidth: {xs: "233px", md: "483px"}}}
        >
          <Typography variant="body2">A podcast brought to you by</Typography>
          <Box component="span" sx={{width: {xs: "96px", md: "140px"}, marginLeft: "0.5rem", typography: "body2", paddingTop: '0.5rem' }}>
            <Logo />
          </Box>
        </Box>
        <Box display="flex">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              fontWeight: 900,
            }}
            onClick={() =>
              window.scrollTo(
                0,
                document?.getElementById("featured")?.offsetTop || 75
              )
            }
          >
            Listen now
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
