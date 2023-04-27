import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        textAlign: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        pl: "6%",
        pr: "6%",
        pt: "6%",
        pb: "6%",
      }}
    >
      <Typography
        sx={{
          fontSize: "h1",
          fontWeight: 500,
          textDecoration: "none",
        }}
      >
        Hey, I'm Josh ;)
      </Typography>
      <Typography
        sx={{
          fontSize: "h4",
          textDecoration: "none",
        }}
      >
        A Web Developer building and optimizing user interfaces for websites and
        web applications.
      </Typography>
    </Box>
  );
};
export default Hero;
