import { Typography } from "@mui/material";
import { Box, Container, display } from "@mui/system";

const Hero = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Typography
        sx={{
          fontSize: "h3",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        About Me
      </Typography>
    </Box>
  );
};
export default Hero;
