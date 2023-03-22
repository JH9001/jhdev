import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

import DescriptionIcon from "@mui/icons-material/Description";

import { navLinks } from "../data/data";

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
        {navLinks.map((link) => (
          <IconButton key={link.id} aria-label={link.name} size="large">
            {link.icon}
          </IconButton>
        ))}
      </Stack>
    </Box>
  );
};
export default Footer;
