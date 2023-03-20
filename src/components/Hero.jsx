import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        pl: "4%",
        pr: "4%",
        pt: "6%",
        pb: "6%",
      }}
    >
      <Typography
        sx={{
          fontSize: "2.8rem",
          fontWeight: 500,
          letterSpacing: ".1rem",
          textDecoration: "none",
        }}
      >
        Joshua Hughes is a web developer based in Melbourne, Australia.
      </Typography>
    </Box>
  );
};
export default Hero;
