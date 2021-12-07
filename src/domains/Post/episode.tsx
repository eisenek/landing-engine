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
        marginTop: "5rem",
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
            width: "840px",
            height: "473px",
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
