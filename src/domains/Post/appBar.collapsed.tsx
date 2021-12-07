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
        paddingX: { xs: "2.75rem", md: "5rem" },
        marginY: { xs: "2.75rem", md: "10px" },
      }}
    >
      <Box sx={{ width: { xs: "99.8px", md: "195px" } }}>
        <HeaderImage />
      </Box>
      <Box display="flex">
        <BlogLink />
      </Box>
      </Box>
  )}

export default AppBarCollapsed;
