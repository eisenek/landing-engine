import { Button } from "@mui/material";
import { Box } from "@mui/system";
import BlogLink from "../../shared/components/blogLink";
import HeaderImage from "../../shared/graphics/smartcity-navigators-collapsed.svg";

interface Props {}

function AppBarCollapsed(props: Props) {
  const {} = props;

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      height="75px"
      sx={{
        paddingX: { xs: "1.1875rem", md: "5rem" },
        marginY: { xs: "0px", md: "10px" },
      }}
    >
      <Box sx={{ width: { xs: "99.8px", md: "195px" } }}>
        <HeaderImage />
      </Box>
      <Box display="flex">
        <BlogLink />
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            fontWeight: 900,
          }}
          onClick={() =>
            window?.scrollTo(0,
              795
            )
          }
        >
          Listen now
        </Button>
      </Box>
      </Box>
  )}

export default AppBarCollapsed;
