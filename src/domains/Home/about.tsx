import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AboutIcon from "./about-icon.svg";

interface Props {}

function About(props: Props) {
  const {} = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      px="2.5rem"
      my="3.75rem"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          backgroundColor: "primary.light",
          borderRadius: "28px",
          marginInline: {
            xs: "2.75rem",
            md: "11.875rem",
          },
          paddingInline: "2.5rem",
          maxWidth: "1060px"
        }}
      >
        <Section padTop>
          <Box component="span" sx={{ width: { xs: "183px", md: "365px" } }}>
            <AboutIcon />
          </Box>
        </Section>
        <Section>
          <Typography variant="h2">About Smart City Navigators</Typography>
        </Section>
        <Section>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Smart City Navigators is a podcast that explores topics related to
            innovation, sustainability and technology. It was created by
            NaviParking, a tech startup with a mission to use technology to have
            a positive impact on cities and their citizens. Featuring experts
            from all fields and from all over the world, it helps its listeners
            understand the broad concept of the smart city.
          </Typography>
        </Section>
      </Box>
    </Box>
  );
}

export default About;

const Section = (props: any) => {
  return (
    <Box
      display="flex"
      mt={props.padTop ? "40px" : undefined}
      mb="40px"
      width="100%"
      justifyContent="center"
      textAlign="center"
      {...props}
    >
      {props.children}
    </Box>
  );
};
