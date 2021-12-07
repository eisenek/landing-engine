import { Box } from "@mui/system";
import React from "react";
import Platforms from "./platforms";

interface Props {}

function Episode(props: Props) {
  const {} = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        marginBottom: {md: "5rem", xs: "60px"},
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box display="flex">
        <Box
          display="block"
          sx={{
            backgroundColor: "primary.light",
            width: {md: "840px", xs: "233px"},
            height: {md: "473px", xs: "131px"},
          }}
        >
          &nbsp;
        </Box>
      </Box>
      <Platforms />

    </Box>
  );
}

export default Episode;
