import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BlogLink from "../../shared/components/blogLink";
import SmartCityNavigatorsCollapsed from "../../shared/graphics/smartcity-navigators-collapsed.svg";

interface Props {}

function AppBarExpanded(props: Props) {
  const {} = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      sx={{
        paddingBottom: { xs: "2.75rem" },
        paddingTop: { xs: "2.75rem" },
        margin: "auto",
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('../dubaisaw_cropped.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          opacity: 0.2,
        }}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{width: "100%", paddingLeft: "5rem", paddingRight: "5rem", marginBottom: "5rem", zIndex: "100"}}>
        <Box display="flex" sx={{ width: "12.19375rem" }}>
          <SmartCityNavigatorsCollapsed />
        </Box>
        <Box display="flex" sx={{zIndex: "9999"}}><BlogLink /></Box>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" sx={{maxWidth: "52.5rem", textAlign: "center", marginBottom: "1.875rem", zIndex: "100"}}>
        <Typography variant="h2" color='white'>Episode 1: Cameras watching your every move? A deep dive into smart cities and what they’re all about</Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" sx={{marginBottom: "5rem", zIndex: "100"}}>
        <Typography variant="body1" color="white">3 december 2021</Typography>
      </Box>
    </Box>
  );
}

export default AppBarExpanded;
