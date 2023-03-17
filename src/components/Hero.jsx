import { Typography } from "@mui/material";
import { Box, Container, display } from "@mui/system";

const Hero = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", bgcolor: "red" }}>
      <Typography
        sx={{
          fontSize: "h1",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Hero
      </Typography>
    </Box>
  );
};
export default Hero;
