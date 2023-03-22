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
        maxWidth: "1600px",
        margin: "0 auto",
        pl: "4%",
        pr: "4%",
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
        I'm a front-end web developer based in Melbourne.
      </Typography>
    </Box>
  );
};
export default Hero;
