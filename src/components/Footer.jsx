import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

import { navLinksData } from "../data/data";
import { Tooltip } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "6%",
        mb: "6%",
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{ "& :hover": { color: "#f67011" } }}
      >
        {navLinksData.map((link) => (
          <Tooltip key={link.id} title={link.name} arrow>
            <IconButton aria-label={link.name} size="large">
              {link.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Stack>
    </Box>
  );
};
export default Footer;
