import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BlogLink from "../../shared/components/blogLink";
import Logo from "../../shared/graphics/shape.svg";
import HeaderImage from "../../shared/graphics/smartcity-navigators.svg";

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
      sx={{paddingBottom: { xs: "2.75rem" },
      paddingTop: { xs: "2.75rem" },
      margin: "auto", "& :before": {}}
    }
    >
      <Box sx={{overflow: 'hidden', position: 'absolute', top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "url('../dubaisaw_cropped.png')",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%", opacity: 0.2}}/><Box width="100%" display="flex" flexGrow="1" justifyContent='flex-end' mt="2.5rem" mb="5rem" zIndex="9999">
      <BlogLink />
    </Box>
      <Box sx={{ width: { xs: "233px", md: "483px" } }}>
        <HeaderImage />
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="center"
        pt="34px"
        pb="40px"
        sx={{ maxWidth: { xs: "233px", md: "483px" } }}
      >
        <Typography variant="body2">A podcast brought to you by</Typography>
        <Box
          component="span"
          sx={{
            width: { xs: "96px", md: "140px" },
            marginLeft: "0.5rem",
            typography: "body2",
            paddingTop: "0.5rem",
          }}
        >
          <Logo />
        </Box>
      </Box>
      <Box display="flex" mb="2.5rem">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            fontWeight: 900,
          }}
          onClick={() =>
            window.scrollTo(0,
              798-80
            )
          }
        >
          Listen now
        </Button>
      </Box>
    </Box>
  );
}

export default AppBarExpanded;
