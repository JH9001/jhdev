import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

import { navLinksData } from "../data/data";
import { Tooltip, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: "6rem",
        mb: "3%",
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{ "& :hover": { color: "#f67011" }, pt: "3rem" }}
      >
        {navLinksData.map((link) => (
          <Tooltip key={link.id} title={link.name} arrow>
            <IconButton
              component="a"
              href={link.href}
              target="_blank"
              aria-label={link.name}
              size="large"
            >
              {link.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Stack>
      <Typography sx={{ pt: "2rem", fontSize: "0.8rem", fontWeight: 700 }}>
        Designed & Built by Joshua Hughes
      </Typography>
    </Box>
  );
};
export default Footer;
